"use client";

import Image from "next/image";
import { useEffect } from "react";
import Logo from "/public/assets/images/logo-lg.svg"

const Loading = () => {
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
        <section className="bg-black w-full h-[100vh] flex-center">
            <Logo className="animate-pulse"/>
        </section>
    );
};

export default Loading;
