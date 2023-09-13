import React from 'react';

const Surpass = () => {
    return (
        <section>
            <div className="flex-column justify-center text-center space-y-[40px] sm:space-y-[64px] mt-[260px] sm:mt-[220px] mb-[260px] sm:mb-[240px]">
                <h1 className="text-[36px] sm:text-[72px] font-normal leading-[43.2px] sm:leading-[86.4px]">
                    We are for
                    <br className="sm:hidden" /> businesses{' '}
                    <br className="hidden sm:block" /> that
                    <br className="sm:hidden" /> are ready to outdo <br />{' '}
                    themselves
                </h1>
                <button className="btn rounded-[100px] border-[1px] border-[black] px-[24px] py-[12px] leading-[17.6px]">
                    Surpass yourself
                </button>
            </div>
        </section>
    );
};

export default Surpass;
