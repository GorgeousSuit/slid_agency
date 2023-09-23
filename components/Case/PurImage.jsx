import Image from "next/image";

const PurImage = (props) => {
    return (
        <section className="bg-[#E9E8E6] sm:py-[8.33vw] w-full sm:h-full max-sm:my-[32px]">
            <Image
                src={props.src}
                alt="Image"
                width={1295}
                height={864}
                className="w-full sm:w-[67.45vw] mx-auto"
            />
        </section>
    );
};

export default PurImage;
