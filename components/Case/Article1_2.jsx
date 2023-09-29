import React from "react";

const Article1_2 = (props) => {
    return (
        <section className="flex flex-col lg:flex-row lg:px-[11.46vw] justify-between max-lg:mb-[64px] px-[32px] sm:px-[92px]">
            <p className="text-[32px] lg:text-[40px] leading-[38.4px] lg:leading-[48px] ">
                {props.articleTitle}
            </p>
            <p className="lg:text-[20px] leading-[22.4px] lg:leading-[28px] text-[#545454] lg:w-[33.13vw] max-lg:mt-[32px]">
                {props.articleText}
            </p>
        </section>
    );
};

export default Article1_2;
8;
