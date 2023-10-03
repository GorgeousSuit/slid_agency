"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import BurgerButtonIcon from "/public/assets/images/burger.svg";
import CrossButtonIcon from "/public/assets/images/cross.svg";

const HeaderPart = () => {
    const [open, updateOpen] = useState(false);

    const scrollToFooter = () => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    const openIcon = open ? (
        <CrossButtonIcon className="h-[30px] w-[30px]" />
    ) : (
        <BurgerButtonIcon className="h-[10px] w-[40px]" />
    );
    return (
        <section className="bg-black w-full max-lg:h-[78vh] lg:h-[73.8vh] 2xl:h-[64.8vh] text-white relative">
            <div className="h-full flex flex-col lg:flex-row justify-between px-[32px] lg:px-[4.79vw]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <Link href="/">
                        <Image
                            src="/assets/images/logo-lg.svg"
                            alt="Logo-lg"
                            width={328}
                            height={194}
                            className={`mt-[64px] lg:mt-[4.17vw] max-xl:w-[25.63vw] max-xl:h-[15.16vw] min-w-[153px] min-h-[91px] ${
                                open && ""
                            }`}
                        />
                    </Link>
                </div>
                <div className=""></div>
            </div>
            <div className="hidden lg:block w-full absolute bottom-[3.79vw]">
                <Nav />
            </div>
        </section>
    );
};

export default HeaderPart;
