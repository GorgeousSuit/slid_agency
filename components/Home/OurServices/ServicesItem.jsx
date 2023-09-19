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
        <article className="w-full sm:w-[57.6%] ">
            <div className="mb-[48px] sm:mb-[64px]">
                <button
                    onClick={() => updateOpen(!open)}
                    className=" w-full justify-between flex items-end pb-[16px] sm:pb-[20px] border-b border-[#D2D2D2] hover:border-[black]"
                >
                    <div className="flex items-end">
                        <p className="h-[21px]sm:h-[33px] text-[16px] sm:text-[24px] leading-[23.5px] sm:leading-[28.8px] font-normal mr-[20px] sm:mr-[85px]">
                            {props.number}
                        </p>
                        <p className="text-left text-[24px] sm:text-[40px] leading-[28.8px] sm:leading-[48px] font-normal">
                            {props.title}
                        </p>
                    </div>
                    <div className="h-full relative">
                        <div className="absolute top-[-24px] sm:top-[-36px] right-0">
                            {openIcon}
                            {openIconSm}
                        </div>
                    </div>
                </button>
                {open && (
                    <div className="py-5">
                        <p className="w-full font-primary text-16 font-medium leading-30 text-black">
                            {props.content}
                        </p>
                    </div>
                )}
            </div>
        </article>
    );
};
export default ServicesItem;
