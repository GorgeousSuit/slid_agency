import Image from "next/image";

const TwoPurImage = (props) => {
    return (
        <section className="max-lg:space-y-[24px] lg:space-x-[24px] flex flex-col lg:flex-row mb-[64px] lg:mb-[160px]">
            <div className="bg-[#E9E8E6]">
                <Image
                    src={props.src1}
                    alt="Image"
                    width={329}
                    height={220}
                    className="w-[83.72vw] lg:w-[38.96vw] mx-auto my-[32px] lg:m-[5.21vw]"
                />
            </div>
            <div className="bg-[#E9E8E6]">
                <Image
                    src={props.src2}
                    alt="Image"
                    width={329}
                    height={220}
                    className="w-[83.72vw] lg:w-[38.96vw] mx-auto my-[32px] lg:m-[5.21vw]"
                />
            </div>
        </section>
    );
};

export default TwoPurImage;
