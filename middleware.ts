import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export const config = {
    matcher: '/',
};

export default async function middleware(request: NextRequest) {
    const ip = request.ip ?? '127.0.0.1';
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(
        ip
    );
    if (!success) {
        NextResponse.redirect(new URL('/blocked', request.url));
    }

    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'sha256-9A7qFFHmxdWjZMQmfzYD2XWaNHLu1ZmQB0Ds4Go764k=';
        style-src 'self' 'unsafe-inline';
        img-src 'self' https://i.ytimg.com blob: data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        frame-src youtube.com www.youtube.com;
        block-all-mixed-content;
        upgrade-insecure-requests;
    `
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim()

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)

    requestHeaders.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    )

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    response.headers.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    )

    // X-Content-Type-Options
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // X-Frame-Options
    response.headers.set('X-Frame-Options', 'DENY');

    // Referrer-Policy
    response.headers.set('Referrer-Policy', 'no-referrer');

    // Permissions-Policy
    response.headers.set('Permissions-Policy', 'accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=()');

    // Strict-Transport-Security 
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

    // X-XSS-Protection
    response.headers.set('X-XSS-Protection', '1; mode=block');

    // Cross-Origin-Embedder-Policy
    response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless (Chrome > 96)');

    // Cross-Origin-Opener-Policy
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

    // Cross-Origin-Resource-Policy
    response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

    // Cross-Origin-Resource-Policy
    response.headers.set('Vary', 'Origin');
    response.headers.set('Access-Control-Allow-Methods', 'GET');
    response.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const allowedOrigins = ['https://oliverengels.com', 'https://fragmented-studio.com'];
    const requestOrigin = request.headers.get('origin') || '';
    response.headers.set('Access-Control-Allow-Origin', 'YOUR_DOMAIN_FOR_BLOCK_MESSAGE');

    if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
        response.headers.set('Access-Control-Allow-Origin', requestOrigin);
    }

    if (!requestOrigin) {
        if (process.env.NODE_ENV === 'development') {
            response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        }
    }

    return response
}