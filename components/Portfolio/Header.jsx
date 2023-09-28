"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "@components/Nav";
import BurgerButtonIcon from "/public/assets/images/burger.svg";
import CrossButtonIcon from "/public/assets/images/cross.svg";

const Header = () => {
    const [open, updateOpen] = useState(false);

    const openIcon = open ? (
        <CrossButtonIcon className="h-[30px] w-[30px]" />
    ) : (
        <BurgerButtonIcon className="h-[10px] w-[40px]" />
    );

    return (
        <header
            className={`bg-black relative h-[51.4vh] pt-[64px] px-[32px] sm:px-[72px] pb-[55px] text-white ${
                open && "max-lg:h-[100svh] lg:h-[73.8vh] 2xl:h-[64.8vh]"
            }`}
            style={{ padding: open && "0px" }}
        >
            <button
                onClick={() => updateOpen(!open)}
                className="pb-[70px] pl-[70px] absolute top-[47px] right-[32px]"
            >
                {openIcon}
            </button>
            <div
                className={`h-full flex flex-col justify-between ${
                    open && "h-0"
                }`}
            >
                <Link href="/">
                    <Image
                        src="/assets/images/logo-lg.svg"
                        alt="Logo-lg"
                        width={98}
                        height={58}
                        className={`sm:w-[140px] sm:h-[83px] ${
                            open &&
                            "block absolute left-[32px] lg:left-[92px] sm:w-[153px] lg:w-[25.63vw] lg:h-[15.16vw] top-[64px] min-w-[153px] min-h-[91px] max-w-[328px] max-h-[194px]"
                        }`}
                    />
                </Link>
                <p
                    className={`text-[48px] sm:text-[72px] font-normal leading-[43.2px] sm:leading-[86.4px] ${
                        open && "hidden"
                    }`}
                >
                    Портфоліо
                </p>
            </div>
            {open && (
                <section className="bg-black w-full lg:h-[73.8vh] 2xl:h-[64.8vh] text-white max-lg:h-[100svh]">
                    <div className="h-full flex flex-col lg:flex-row justify-between px-[32px] lg:px-[4.79vw]">
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
                            <Nav />
                        </div>
                        <div className={`pt-[47px] lg:pt-[64px]`}>
                            <div className="lg:flex justify-between  lg:py-1 lg:mb-[35px] lg:pr-[25px]">
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

                            <div className="flex items-center mb-[20px] lg:mb-[32px] gap-[37px] font-normal">
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
                                className={`hidden lg:block text-[20px] lg:clamp24 leading-[22px] lg:leading-[27px] font-normal`}
                            >
                                Тільки сенси залишають слід в історії.
                                <br className="hidden lg:block" /> Ми креативна
                                агенція яка ці сенси створює.
                            </p>
                            <p className="lg:hidden text-[24px] leading [26.4px]">
                                welcome@slid.agency
                            </p>
                            <button
                                className={`border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn lg:hidden mb-[40px] mt-[32px]`}
                            >
                                Зв'яжіться з нами
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block w-full absolute bottom-[3.79vw]">
                        <Nav />
                    </div>
                </section>
            )}
        </header>
    );
};

export default Header;
