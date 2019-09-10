// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="Scott Harvey" />
                    <meta name="generator" content="Jekyll v3.8.5" />

                    {/* <!-- Bootstrap core CSS --> */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

                    <link href="/static/CSS/about.css" rel="stylesheet" />
                    <link href="/static/CSS/cover.css" rel="stylesheet" />
                    <script src="https://kit.fontawesome.com/a5667f3e25.js"></script>
                </Head>
                <body className="text-center">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument