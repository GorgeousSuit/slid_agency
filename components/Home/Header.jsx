"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import BurgerButtonIcon from "/public/assets/images/burger.svg";
import CrossButtonIcon from "/public/assets/images/cross.svg";

const Header = () => {
    const [open, updateOpen] = useState(false);

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
                        className={`mt-[64px] lg:mt-[3.333vw] max-xl:w-[25.63vw] max-xl:h-[15.16vw] min-w-[153px] min-h-[91px] ${
                            open && ""
                        }`}
                    />
                </Link>
                {open && (
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex gap-4 py-1 hover:[&>*]:underline mt-[3.7559vh] mb-[12.5587vh] iphone7">
                            <Link className="text-[#545454]" href="/EN">
                                Eng
                            </Link>
                            <Link href="/UA">Ua</Link>
                        </div>
                        <Nav />

                        <div className="text-[24px] font-normal leading-[26.4px] space-y-[16px] mb-[40px]">
                            <p className="">+38 067 275 74 24</p>
                            <p className="">welcome@slid.agency</p>
                        </div>
                    </div>
                )}
                <div className={`lg:pt-[40px] ${open ? "hidden" : ""}`}>
                    <div className="hidden lg:flex justify-between  py-1 mb-[35px]">
                        <div className="space-x-[16px]">
                            <Link
                                className="text-[#545454] hover:underline"
                                href="/en-US"
                            >
                                Eng
                            </Link>
                            <Link href="/uk-UA">Ua</Link>
                        </div>
                        <p className="hidden lg:block font-normal">
                            вул. Січових Стрільців, 10, Київ
                        </p>
                    </div>
                    <div className="flex items-center mb-[20px] lg:mb-[32px] gap-[37px]">
                        <p
                            className={`text-[20px] lg:text-[28px] lg:clamp24 leading-[22px] lg:leading-[30.8px]}`}
                        >
                            +38 067 275 74 24
                        </p>
                        <button className="border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[22px] btn hidden lg:block">
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
                        className={`border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn lg:hidden mb-[64px] mt-[72px] ${
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
