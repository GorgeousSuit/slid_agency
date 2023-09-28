import Image from "next/image";

const ImageText = (props) => {
    return (
        <section className="max-lg:my-[96px] px-[32px] lg:px-[16.25vw] w-full h-full lg:h-[auto] flex flex-col lg:flex-row justify-between items-center">
            <Image
                src={props.src}
                alt="Image"
                width={164}
                height={334}
                className="lg:w-[20.83vw] lg:h-[42.55vw] max-lg:mb-[64px]"
            />
            <p className="lg:w-[33.13vw] text-[#545454] lg:text-[20px] leading-[22.4px] lg:leading-[28px]">
                {props.text}
            </p>
        </section>
    );
};

export default ImageText;
