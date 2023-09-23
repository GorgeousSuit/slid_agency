import Image from "next/image";

const ImageText = (props) => {
    return (
        <section className="max-sm:px-[32px] sm:px-[11.46vw] sm:py-[8.33vw] w-full h-full sm:h-[100vh] flex flex-col lg:flex-row justify-center items-center max-sm:my-[32px]">
            <Image
                src={props.src}
                alt="Image"
                width={300}
                height={740}
                className="max-sm:mb-[32px]"
            />
            <p className="sm:w-[33.13vw] text-[#545454] lg:text-[20px] leading-[22.4px] lg:leading-[28px]">
                {props.text}
            </p>
        </section>
    );
};

export default ImageText;
