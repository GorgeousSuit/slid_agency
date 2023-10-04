import Image from "next/image";

const TwoImage = (props) => {
    return (
        <section className="lg:mb-[160px] lg:px-[92px]">
            <div className="max-lg:space-y-[96px] lg:space-x-[24px] flex flex-col lg:flex-row lg:justify-between items-center">
                <Image
                    src={props.src1}
                    alt="Image"
                    width={164}
                    height={335}
                    className={props.src1Style}
                />
                <Image
                    src={props.src2}
                    alt="Image"
                    width={393}
                    height={393}
                    className="lg:w-[44.58vw] lg:h-[57.29vw]"
                />
            </div>
        </section>
    );
};

export default TwoImage;
