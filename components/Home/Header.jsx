"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import BurgerButtonIcon from "/public/assets/images/burger.svg";
import CrossButtonIcon from "/public/assets/images/cross.svg";

const Header = () => {
    const [open, updateOpen] = useState(false);

    const scrollToFooter = () => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const disableScroll = (e) => {
            if (open) {
                e.preventDefault();
            }
        };

        if (typeof window !== "undefined") {
            if (open) {
                document.body.style.overflow = "hidden";
                document.addEventListener("touchmove", disableScroll, {
                    passive: false,
                });
            } else {
                document.body.style.overflow = "auto";
                document.removeEventListener("touchmove", disableScroll);
            }
        }
        return () => {
            if (typeof window !== "undefined") {
                document.body.style.overflow = "auto";
                document.removeEventListener("touchmove", disableScroll);
            }
        };
    }, [open]);

    const openIcon = open ? (
        <CrossButtonIcon className="h-[30px] w-[30px]" />
    ) : (
        <BurgerButtonIcon className="h-[10px] w-[40px]" />
    );

    return (
        <header
            className={`bg-black w-full max-lg:h-[78vh] lg:h-[73.8vh] 2xl:h-[64.8vh] text-white relative`}
            style={{ height: open && "100svh" }}
        >
            <button
                onClick={() => updateOpen(!open)}
                className="py-[64px] px-[32px] lg:hidden absolute top-0 right-0"
            >
                {openIcon}
            </button>

            <div className="h-full flex flex-col lg:flex-row justify-between px-[32px] lg:px-[4.79vw]">
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
                {open && (
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex gap-4 mt-[3.7559vh]">
                            <div className="text-[#545454]" href="/EN">
                                Eng
                            </div>
                            <div href="/UA">Ua</div>
                        </div>
                        <div className="pb-[12.8vh]">
                            <Nav />
                        </div>

                        <div className="text-[24px] font-normal leading-[26.4px] space-y-[16px] mb-[40px]">
                            <p className="">+38 067 275 74 24</p>
                            <p className="">hi@slid.agency</p>
                        </div>
                    </div>
                )}
                <div className={`lg:mt-[3.28vw] ${open ? "hidden" : ""}`}>
                    <div className="hidden lg:flex justify-between mb-[1.67vw]">
                        <div className="flex space-x-[16px]">
                            <div className="text-[#545454]" href="/en-US">
                                Eng
                            </div>
                            <div href="/uk-UA">Ua</div>
                        </div>
                        <p className="hidden lg:block font-normal">
                            вул. Січових Стрільців, 10, Київ
                        </p>
                    </div>
                    <div className="flex items-center mb-[20px] lg:mb-[1.67vw] gap-[37px]">
                        <p
                            className={`text-[20px] lg:text-[28px] lg:clamp24 leading-[22px] lg:leading-[30.8px]}`}
                        >
                            +38 067 275 74 24
                        </p>
                        <button
                            onClick={scrollToFooter}
                            className="border-white border-[1px] rounded-[100px] px-[24px] pt-[12px] pb-[10px] leading-[22px] btn hidden lg:block"
                        >
                            Зв'яжіться з нами
                        </button>
                    </div>
                    <p
                        className={`block text-[20px] lg:clamp24 leading-[22px] lg:leading-[27px] font-normal ${
                            open ? "hidden" : ""
                        }`}
                    >
                        Тільки сенси залишають слід в історії.
                        <br className="hidden lg:block" /> Ми креативна агенція
                        яка ці сенси створює.
                    </p>
                    <button
                        className={`border-white border-[1px] rounded-[100px] px-[24px] pt-[12px] pb-[8px] leading-[17.6px] btn lg:hidden mb-[64px] mt-[72px] ${
                            open ? "hidden" : ""
                        }`}
                    >
                        Зв'яжіться з нами
                    </button>
                </div>
            </div>
            <div className="hidden lg:block w-full absolute bottom-[3.79vw]">
                <Nav />
            </div>
        </header>
    );
};

export default Header;
