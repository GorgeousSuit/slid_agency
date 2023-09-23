import Image from "next/image";

const TwoImageText = (props) => {
    return (
        <section className="lg:py-[160]">
            <div className="sm:space-x-[24px] lg:mb-[183px] flex flex-col sm:flex-row">
                <Image
                    src={props.src1}
                    alt="Image"
                    width={856}
                    height={1100}
                    className=""
                />
                <Image
                    src={props.src2}
                    alt="Image"
                    width={856}
                    height={1100}
                    className=""
                />
            </div>
            <div className="mx-[11.46vw]">
                <p className="text-[32px] lg:text-[40px] leading-[38.4px] lg:leading-[48px]">
                    {props.title}
                </p>
                <p className="lg:text-[20px] leading-[22.4px] lg:leading-[28px] text-[#545454] lg:w-[33.13vw]">
                    {props.text}
                </p>
            </div>
        </section>
    );
};

export default TwoImageText;
