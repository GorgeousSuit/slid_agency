"use client";

import { useState } from "react";
import MinusButtonIcon from "/public/assets/images/minus.svg";
import PlusButtonIcon from "/public/assets/images/plus.svg";
import MinusButtonIconSm from "/public/assets/images/minus-sm.svg";
import PlusButtonIconSm from "/public/assets/images/plus-sm.svg";

const ServicesItem = (props) => {
    const [open, updateOpen] = useState(false);

    const openIcon = open ? (
        <MinusButtonIcon className="h-[32px] w-[32px] hidden sm:block" />
    ) : (
        <PlusButtonIcon className="h-[32px] w-[32px] hidden sm:block" />
    );
    const openIconSm = open ? (
        <MinusButtonIconSm className="h-[24px] w-[24px] sm:hidden" />
    ) : (
        <PlusButtonIconSm className="h-[24px] w-[24px] sm:hidden" />
    );

    return (
        <article className="w-full lg:w-[57.6%] ">
            <div className="mb-[48px] lg:mb-[64px]">
                <button
                    onClick={() => updateOpen(!open)}
                    className=" w-full justify-between flex items-end pb-[16px] lg:pb-[20px] border-b border-[#D2D2D2] max-sm:focus:border-[black] sm:hover:border-[black]"
                >
                    <div className="flex items-end">
                        <p className="text-[16px] lg:text-[24px] leading-[23.5px] lg:leading-[28.8px] font-normal mr-[20px] lg:mr-[85px]">
                            {props.number}
                        </p>
                        <p className="text-left text-[24px] lg:text-[40px] leading-[28.8px] lg:leading-[48px] font-normal">
                            {props.title}
                        </p>
                    </div>
                    <div className="w-[40px] h-full relative">
                        <div className="absolute top-[-24px] lg:top-[-36px] right-0">
                            {openIcon}
                            {openIconSm}
                        </div>
                    </div>
                </button>
                {open && (
                    <div className="py-5">
                        <p className="w-full font-normal leading-[22.4px] lg:leading-[28px] text-[#545454]">
                            {props.content}
                        </p>
                    </div>
                )}
            </div>
        </article>
    );
};
export default ServicesItem;
