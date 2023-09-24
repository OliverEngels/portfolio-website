import Head from 'next/head'

const Layout = ({ children, title }) => (
    <>
        {title && (
            <Head>
                <title>{title} - Oliver Engels</title>
                <meta property='og:title' content={title} />
                <meta
                    name='description'
                    content='Oliver Engels work experience and tinkering’s, showing his abilities in various professional skills.'
                />
            </Head>
        )}
        {children}
    </>
)

export default Layout
