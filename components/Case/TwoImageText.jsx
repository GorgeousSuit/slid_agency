import Image from "next/image";

const TwoImageText = (props) => {
    return (
        <section className="">
            <div className="max-lg:space-y-[32px] lg:space-x-[24px] lg:mb-[160px] flex flex-col lg:flex-row justify-center items-center max-lg:mb-[96px]">
                <Image
                    src={props.src1}
                    alt="Image"
                    width={856}
                    height={1100}
                    className="lg:w-[44.58vw] lg:h-[57.29vw]"
                />
                <Image
                    src={props.src2}
                    alt="Image"
                    width={856}
                    height={1100}
                    className="lg:w-[44.58vw] lg:h-[57.29vw]"
                />
            </div>
            <div className="mx-[16.25vw] flex flex-col lg:flex-row lg:justify-between">
                <p className="text-[32px] lg:text-[40px] leading-[38.4px] lg:leading-[48px] max-lg:mb-[32px]">
                    {props.title}
                </p>
                <p className="lg:text-[20px] leading-[22.4px] lg:leading-[28px] text-[#545454] lg:w-[34vw]">
                    {props.text}
                </p>
            </div>
        </section>
    );
};

export default TwoImageText;
