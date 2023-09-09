'use client';

import { useState } from 'react';
import MinusButtonIcon from '/public/assets/images/minus.svg';
import PlusButtonIcon from '/public/assets/images/plus.svg';

const ServicesItem = (props) => {
    const [open, updateOpen] = useState(false);

    const openIcon = open ? (
        <MinusButtonIcon className="h-[32px] w-[32px]" />
    ) : (
        <PlusButtonIcon className="h-[32px] w-[32px]" />
    );

    return (
        <article className="w-[57.6%] ">
            <div className="mb-[64px]">
                <button
                    onClick={() => updateOpen(!open)}
                    className=" w-full justify-between flex items-end pb-[20px] border-b border-[#D2D2D2]"
                >
                    <div className="flex items-end">
                        <p className="h-[33px] text-[24px] leading-[28.8px] font-normal mr-[85px]">
                            {props.number}
                        </p>
                        <p className="text-[40px] leading-[48px] font-normal">
                            {props.title}
                        </p>
                    </div>
                    {openIcon}
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
