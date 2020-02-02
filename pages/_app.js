import React from 'react'
import App from "next/app";
import Head from "~/components/Head";
import GoogleAnalyticsWrapper from "~/components/GoogleAnalyticsWrapper";


class PeonyAccessoriesApp extends App {

    render() {
        const {Component, pageProps} = this.props;
        return (
            <GoogleAnalyticsWrapper>
                <Head/>
                <Component {...pageProps} />
            </GoogleAnalyticsWrapper>
        );
    }

}

export default PeonyAccessoriesApp;