import Image from "next/image";
import Link from "next/link";

const FeaturedItem = (props) => {
    return (
        <div className="max-sm:w-full max-sm:h-[370px] mb-[-2px] relative overflow-hidden">
            <Link href={props.href}>
                <Image
                    src={props.src}
                    alt="Case"
                    width={1920}
                    height={800}
                    srcSet={props.srcSet}
                    sizes={props.sizes}
                    className={`w-full max-sm:h-full max-sm:object-cover overflow-x-hidden overflow-y-hidden transition duration-500 hover:scale-105 ${props.style}`}
                    unoptimized
                />
            </Link>
        </div>
    );
};

export default FeaturedItem;
