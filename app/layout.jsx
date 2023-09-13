import "@styles/globals.css";
import Head from "next/head";
import Fixel from "next/font/local";
import Footer from "@components/Footer";

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
            <body>
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
