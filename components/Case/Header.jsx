"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "@components/Nav";
import BurgerButtonIcon from "/public/assets/images/burger.svg";
import CrossButtonIcon from "/public/assets/images/cross.svg";

const Header = (props) => {
    const [open, updateOpen] = useState(false);

    const openIcon = open ? (
        <CrossButtonIcon className="h-[30px] w-[30px]" />
    ) : (
        <BurgerButtonIcon className="h-[10px] w-[40px]" />
    );

    return (
        <section className="">
            <div
                className={`w-full h-[78vh] text-white relative sm:px-[72px] sm:pt-[64px] sm:pb-[55px] ${
                    open && "svh bg-black"
                }`}
            >
                <Image
                    src={props.mainCover}
                    alt="Logo-lg"
                    width={1920}
                    height={1080}
                    className={`w-full absolute top-[-20px] left-0 z-[-1] ${
                        open && "hidden"
                    }`}
                />
                <button
                    onClick={() => updateOpen(!open)}
                    className="absolute top-[64px] right-[72px]"
                >
                    {openIcon}
                </button>

                <div className="flex flex-col items-start justify-between h-full">
                    <Link href="/">
                        <Image
                            src="/assets/images/logo-lg.svg"
                            alt="Logo-lg"
                            width={98}
                            height={58}
                            className=""
                        />
                    </Link>
                    {open && (
                        <div className="">
                            <div
                                className={`sm:pt-[40px] flex flex-col absolute top-[0px] right-[100px]`}
                            >
                                <div className="hidden sm:flex gap-4 py-1 mb-[35px] hover:[&>*]:underline">
                                    <Link
                                        className="text-[#545454]"
                                        href="/en-US"
                                    >
                                        Eng
                                    </Link>
                                    <Link href="/uk-UA">Ua</Link>
                                </div>
                                <div className="flex items-center mb-[20px] sm:mb-[37px] gap-[66px]">
                                    <p
                                        className={`text-[20px] sm:clamp24 leading-[22px] sm:leading-[26.4px] `}
                                    >
                                        +38 067 275 74 24
                                    </p>
                                    <button className="border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn hidden sm:block">
                                        Зв'яжіться з нами
                                    </button>
                                </div>
                                <p
                                    className={`block text-[20px] sm:clamp24 leading-[22px] sm:leading-[26.4px] font-normal `}
                                >
                                    Тільки сенси залишають слід в{" "}
                                    <br className="hidden sm:block" /> історії.
                                    <br className="sm:hidden" /> Ми створюємо
                                    сенси.
                                </p>
                                <button
                                    className={`border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn sm:hidden mb-[64px] mt-[72px]`}
                                >
                                    Зв'яжіться з нами
                                </button>
                            </div>
                            <div className="hidden sm:block w-full absolute bottom-[100px] left-[0]">
                                <Nav />
                            </div>
                        </div>
                    )}
                    <p
                        className={`text-[168px] font-normal leading-[151.2px] ml-[-12px] ${
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
