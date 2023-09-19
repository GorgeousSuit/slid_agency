import Image from "next/image";

const FeaturedItem = (props) => {
    return (
        <div className="max-sm:w-full max-sm:h-[370px]">
            <Image
                src={props.src}
                alt="Case"
                width={1920}
                height={800}
                className="w-full max-sm:h-full max-sm:object-cover overflow-x-hidden"
            />
        </div>
    );
};

export default FeaturedItem;
