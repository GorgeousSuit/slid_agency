import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="slid | Креативна агенція"
                    content="Креативна агенція"
                />
                <link rel="icon" href="public/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
