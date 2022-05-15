import React from "react";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-screen";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Freelancer Website</title>
                <link rel="icon" href="/img/favicon.ico" />
            </Head>
            <LoadingScreen />
            <Component {...pageProps} />
            <ScrollToTop />
            <Script id="wow" src="/js/wow.min.js"></Script>
            <Script
                strategy="beforeInteractive"
                id="splitting"
                src="/js/splitting.min.js"
            ></Script>
            <Script
                id="isotope"
                strategy="beforeInteractive"
                src="/js/isotope.pkgd.min.js"
            ></Script>
            <Script
                id="wowInit"
                strategy="lazyOnload"
            >{`new WOW().init();`}</Script>
        </>
    );
}

export default MyApp;
