import Image from "next/image";

const Article1 = (props) => {
    return (
        <section className="mt-[96px] lg:mt-[178px] lg:pr-[11.46vw] font-normal mb-[96px] lg:mb-[160px]">
            <p className="text-[32px] lg:text-[72px] leading-[38.4px] lg:leading-[86.4px]">
                {props.articleTitle}
            </p>
            <div className="flex flex-col lg:flex-row text-[20px] leading-[28px] text-[#545454] lg:mt-[64px] justify-between">
                <div className="">
                    <Image
                        src={props.articleSrc}
                        alt="Image"
                        width={329}
                        height={480}
                        className={`min-w-[329px] min-h-[480px] lg:w-[21.67vw] lg:h-[32.81vw] mt-[64px] lg:mt-[5vw] lg:ml-[11.46vw] max-lg:mb-[64px] ${props.imageStyle}`}
                    />
                </div>
                <p className="lg:w-[33.13vw]">{props.articleText}</p>
            </div>
        </section>
    );
};

export default Article1;
