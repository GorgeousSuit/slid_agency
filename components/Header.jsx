'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import { useState } from 'react';
import BurgerButtonIcon from '/public/assets/images/burger.svg';
import CrossButtonIcon from '/public/assets/images/cross.svg';

const Header = () => {
    const [open, updateOpen] = useState(false);

    const openIcon = open ? (
        <CrossButtonIcon className="h-[30px] w-[30px]" />
    ) : (
        <BurgerButtonIcon className="h-[10px] w-[40px]" />
    );

    return (
        <section>
            <div
                className={`bg-black w-full h-[78vh] text-white relative ${
                    open && 'svh'
                }`}
            >
                <button
                    onClick={() => updateOpen(!open)}
                    className="sm:hidden absolute top-[64px] right-[32px]"
                >
                    {openIcon}
                </button>

                <div className="h-full flex flex-col sm:flex-row justify-between px-[32px] sm:px-[3.75vw]">
                    <Image
                        src="/assets/images/logo-lg.svg"
                        alt="Logo-lg"
                        width={330}
                        height={195}
                        className={`mt-[64px] sm:mt-[3.333vw] w-[17.19vw] h-[10.16vw] min-w-[153px] min-h-[91px] ${
                            open ? 'hidden' : ''
                        }`}
                    />
                    {open && (
                        <div className="h-full flex flex-col justify-between">
                            <div className="">
                                <Image
                                    src="/assets/images/logo-lg.svg"
                                    alt="Logo-lg"
                                    width={330}
                                    height={195}
                                    className="mt-[64px] sm:mt-[3.333vw] w-[17.19vw] h-[10.16vw] min-w-[153px] min-h-[91px]"
                                />
                                <div className="flex gap-4 py-1 hover:[&>*]:underline mt-[3.7559vh] mb-[12.5587vh] iphone7">
                                    <Link href="/EN">Eng</Link>
                                    <Link href="/UA">Ua</Link>
                                </div>
                                <Nav />
                            </div>

                            <div className="text-[24px] font-normal leading-[26.4px] space-y-[16px] mb-[40px]">
                                <p className="">+38 067 275 74 24</p>
                                <p className="">welcome@slid.agency</p>
                            </div>
                        </div>
                    )}
                    <div className={`sm:pt-[40px] ${open ? 'hidden' : ''}`}>
                        <div className="hidden sm:flex gap-4 py-1 mb-[35px] hover:[&>*]:underline">
                            <Link href="/EN">Eng</Link>
                            <Link href="/UA">Ua</Link>
                        </div>
                        <div className="flex items-center mb-[20px] sm:mb-[37px] gap-[66px]">
                            <p
                                className={`text-[20px] sm:clamp24 leading-[22px] sm:leading-[26.4px] ${
                                    open ? 'text-red' : ''
                                }`}
                            >
                                +38 067 275 74 24
                            </p>
                            <button className="border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn hidden sm:block">
                                Get in touch
                            </button>
                        </div>
                        <p
                            className={`block text-[20px] sm:clamp24 leading-[22px] sm:leading-[26.4px] font-normal ${
                                open ? 'hidden' : ''
                            }`}
                        >
                            We create the best design
                            <br className="sm:hidden" /> solutions
                            <br className="hidden sm:block" /> for your product
                            in
                            <br className="sm:hidden" /> digital
                        </p>
                        <button
                            className={`border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn sm:hidden mb-[64px] mt-[72px] ${
                                open ? 'hidden' : ''
                            }`}
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
                <div className="hidden sm:block w-full absolute bottom-[100px]">
                    <Nav />
                </div>
            </div>
        </section>
    );
};

export default Header;
