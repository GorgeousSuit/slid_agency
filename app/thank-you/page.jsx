"use client";

import { useEffect } from "react";
import AnimationComponent from "@components/Home/AnimationComponent";
import Link from "next/link";

const page = () => {
    const open = true;

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
    return (
        <section className="relative text-white">
            <div className="font-normal text-center absolute z-10 top-[calc(50%-150px)] left-[calc(50%-208px)]">
                <h1 className="text-[72px] leading-[120%] mb-[24px]">
                    Ви круті!
                </h1>
                <h2 className="text-[20px] leading-[120%] mb-[64px]">
                    Ми зв’яжемось з вами найближчим часом
                </h2>
                <Link href="/">
                    <button className="bg-[#FF4A1C] rounded-[100px] px-[24px] pt-[12px] pb-[10px] leading-[22px] btn w-fit">
                        На головну
                    </button>
                </Link>
            </div>

            <AnimationComponent />
        </section>
    );
};

export default page;
