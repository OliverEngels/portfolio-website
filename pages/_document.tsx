import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { theme } from '@components/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png" />
                    <link rel="manifest" href="icon/site.webmanifest" />
                    <link rel="mask-icon" href="icon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
