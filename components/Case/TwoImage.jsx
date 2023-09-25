import Image from "next/image";

const TwoImage = (props) => {
    return (
        <section className="lg:py-[160px] lg:px-[92px]">
            <div className="max-lg:space-y-[24px] lg:space-x-[24px] lg:mb-[183px] flex flex-col lg:flex-row lg:justify-between items-center">
                <Image
                    src={props.src1}
                    alt="Image"
                    width={856}
                    height={1100}
                    className={props.src1Style}
                />
                <Image
                    src={props.src2}
                    alt="Image"
                    width={856}
                    height={1100}
                    className="lg:w-[44.58vw] lg:h-[57.29vw]"
                />
            </div>
        </section>
    );
};

export default TwoImage;
