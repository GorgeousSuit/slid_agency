import "@styles/globals.css";
import Head from "next/head";
import Fixel from "next/font/local";
import Footer from "@components/Footer";
import Script from "next/script";

const fixelFont = Fixel({ src: "../fonts/FixelVariable.ttf" });

export const metadata = {
    title: "slid | Креативна агенція",
    description: "Currently is under development",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" style={fixelFont.style} className="font-medium">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
            >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NWFTWVB3');`}
            </Script>
            <body>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NWFTWVB3"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
