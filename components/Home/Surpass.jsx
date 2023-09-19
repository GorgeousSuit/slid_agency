import React from "react";

const Surpass = () => {
    return (
        <section>
            <div className="flex-column justify-center text-center space-y-[40px] sm:space-y-[64px] mt-[148px] sm:mt-[300px] 2xl:mt-[256.33px] mb-[140px] sm:mb-[300px] 2xl:mb-[256px]">
                <h1 className="text-[36px] sm:text-[72px] font-normal leading-[43.2px] sm:leading-[86.4px]">
                    Ми для тих,
                    <br className="sm:hidden" /> хто готовий{" "}
                    <br className="hidden sm:block" /> перевершити
                    <br className="sm:hidden" /> сам себе
                </h1>
                <button className="btn rounded-[100px] border-[1px] border-[black] px-[24px] py-[12px] leading-[17.6px]">
                    Вийти за рамки
                </button>
            </div>
        </section>
    );
};

export default Surpass;
