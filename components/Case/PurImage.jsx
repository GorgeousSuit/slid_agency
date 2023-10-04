import Image from "next/image";

const PurImage = (props) => {
    return (
        <section
            className={`bg-[#E9E8E6] max-lg:p-[32px] w-full lg:h-full py-[160px] my-[64px] lg:my-[160px] ${props.style}`}
        >
            <Image
                src={props.src}
                alt="Image"
                width={1295}
                height={864}
                className="w-full lg:w-[67.45vw] mx-auto"
                unoptimized
            />
        </section>
    );
};

export default PurImage;
