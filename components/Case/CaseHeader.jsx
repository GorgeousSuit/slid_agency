"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "@components/Nav";
import BurgerButtonIcon from "/public/assets/images/burger.svg";
import CrossButtonIcon from "/public/assets/images/cross.svg";

const Header = (props) => {
    const scrollToFooter = () => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [open, updateOpen] = useState(false);

    const handleFooterClick = () => {
        scrollToFooter();
        updateOpen(!open);
      };

    const openIcon = open ? (
        <CrossButtonIcon className="h-[36px] w-[36px] mt-[-18px]" />
    ) : (
        <BurgerButtonIcon className="h-[10px] w-[40px]" />
    );

    return (
        <section
            className={`bg-cover ${props.bgPosition}`}
            style={{
                backgroundImage: `url(${props.mainCover})`,
            }}
        >
            <div
                className={`w-full h-[73vh] text-white relative px-[32px] sm:px-[92px] pt-[64px] sm:pt-[80px] pb-[32px] sm:pb-[4.43vw] ${
                    open &&
                    ""
                }`}
                style={{ padding: open && "0px" }}
            >
                <button
                    onClick={() => updateOpen(!open)}
                    className={`py-[32px] px-[32px] ${open ? "fixed" : "absolute"} top-[32px] right-[0px] sm:right-[60px] sm:top-[48px] z-20`}
                >
                    {openIcon}
                </button>

                <div className="flex flex-col items-start justify-between h-full">
                    <Link href="/">
                        <Image
                            src="/assets/images/logo-lg.svg"
                            alt="Logo-lg"
                            width={153}
                            height={91}
                            className={`sm:w-[140px] sm:h-[83px] ${
                                open &&
                                "z-20 fixed left-[32px] lg:left-[92px] sm:w-[153px] lg:w-[25.63vw] lg:h-[15.16vw] top-[64px] min-w-[153px] min-h-[91px] max-w-[328px] max-h-[194px]"
                            }`}
                        />
                    </Link>
                    {open && (
                        <section className="fixed top-0 left-0 z-10 bg-black w-full lg:h-[73.8vh] 2xl:h-[64.8vh] text-white max-lg:h-[100svh]">
                            <div className="h-full flex flex-col lg:flex-row justify-between px-[32px] lg:pl-[4.79vw] lg:pr-[148px]">
                                <div className="space-y-[20px]">
                                    <div className="flex lg:hidden justify-between mt-[187px] mb-[35px] lg:pr-[25px]">
                                        <div className="space-x-[16px]">
                                            <Link
                                                className="text-[#545454] hover:underline"
                                                href="/en-US"
                                            >
                                                Eng
                                            </Link>
                                            <Link href="/uk-UA">Ua</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:hidden">
                                    <Nav setOpen={updateOpen}/>
                                </div>
                                <div className={`pt-[47px] lg:pt-[64px]`}>
                                    <div className="lg:flex justify-between lg:mb-[32px] lg:pr-[25px]">
                                        <div className="space-x-[16px] max-lg:hidden">
                                            <Link
                                                className="text-[#545454] hover:underline"
                                                href="/en-US"
                                            >
                                                Eng
                                            </Link>
                                            <Link href="/uk-UA">Ua</Link>
                                        </div>
                                        <p className="font-normal max-lg:mb-[24px]">
                                            вул. Січових Стрільців, 10, Київ
                                        </p>
                                    </div>

                                    <div className="flex items-center lg:mb-[32px] gap-[37px] font-normal">
                                        <p
                                            className={`text-[24px] lg:text-[28px] lg:clamp24 leading-[22px] lg:leading-[30.8px]}`}
                                        >
                                            +38 067 275 74 24
                                        </p>
                                        <button
                                            onClick={handleFooterClick}
                                            className="border-white border-[1px] rounded-[100px] px-[24px] pt-[12px] pb-[10px] leading-[22px] btn hidden lg:block"
                                        >
                                            Зв’язатись з нами
                                        </button>
                                    </div>
                                    <p
                                        className={`hidden lg:block text-[20px] lg:clamp24 leading-[22px] lg:leading-[27px] font-normal`}
                                    >
                                        Тільки сенси залишають слід в історії.
                                        <br className="hidden lg:block" /> Ми
                                        креативна агенція яка ці сенси створює.
                                    </p>
                                    <button
                                        className={`border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn lg:hidden mb-[16px] mt-[40px]`}
                                    >
                                        Зв’язатись з нами
                                    </button>
                                </div>
                            </div>
                            <div className="hidden lg:block w-full absolute bottom-[3.79vw]">
                                <Nav setOpen={updateOpen}/>
                            </div>
                        </section>
                    )}
                    <p
                        className={`text-[48px] sm:text-[8.75vw] font-normal leading-[43.2px] sm:leading-[7.87vw] ml-[-12px] ${
                            open && "hidden"
                        }`}
                    >
                        {props.mainTitle}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;
