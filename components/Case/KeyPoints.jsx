import React from "react";

const KeyPoints = (props) => {
    return (
        <section className="flex justify-between pt-[40px] font-normal leading-[17.6px] px-[32px] sm:px-[92px]  max-lg:space-x-[48px] max-lg:overflow-x-scroll no-scrollbar whitespace-nowrap">
            <div className="">{props.key1}</div>
            <div className="">{props.key2}</div>
            <div className="">{props.key3}</div>
            <div className="">{props.key4}</div>
        </section>
    );
};

export default KeyPoints;
