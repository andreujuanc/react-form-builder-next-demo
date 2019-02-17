import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import "../css/bootstrap.css"
import "../css/font-awesome.css"
import 'react-form-builder2/dist/app.css';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (

            <Container>
                <Head>
                    <title>React-form-builder-next</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="" />
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp