import Image from "next/image";

const PurImage = (props) => {
    return (
        <section className="bg-[#E9E8E6] max-lg:p-[32px] lg:py-[8.33vw] w-full lg:h-full my-[64px] lg:my-[160px]">
            <Image
                src={props.src}
                alt="Image"
                width={1295}
                height={864}
                className="w-full lg:w-[67.45vw] mx-auto"
            />
        </section>
    );
};

export default PurImage;
