"use client";

import Image from "next/image";
import Head from "next/head";
import Header from "@components/Home/HomeHeader";
import Fixel from "next/font/local";
import Showreel from "@components/Home/Showreel";
import Advantages from "@components/Home/Advantages";
import Featured from "@components/Home/Featured/Featured";
import Surpass from "@components/Home/Surpass";
import Services from "@components/Home/OurServices/Services";
import AnimationComponent from "@components/Home/AnimationComponent";
import AnimatedHoverButton from "@components/Home/AnimatedHoverButton";
import { useEffect } from "react";

const fixelFont = Fixel({ src: "../fonts/FixelDisplay-Medium.ttf" });

const Home = () => {
    return (
        <section>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta
                    name="slid | Креативна агенція"
                    content="Креативна агенція"
                />
                <link rel="icon" href="app/favicon.ico" />
            </Head>
            <Header />
            <Showreel
                src="/assets/videos/Showreel.mp4"
                poster="/assets/images/showreel-poster.webp"
            />
            <Advantages />
            <Featured />
            <Surpass />
            <Services />
            <div className="sm:hidden">
                <AnimationComponent />
            </div>
        </section>
    );
};

export default Home;
