import Image from "next/image";
import Link from "next/link";

const FeaturedItem = (props) => {
    return (
        <div className="max-sm:w-full max-sm:h-[370px] mb-[-2px]">
            <Link href={props.href}>
                <Image
                    src={props.src}
                    alt="Case"
                    width={1920}
                    height={800}
                    className="w-full max-sm:h-full max-sm:object-cover overflow-x-hidden"
                    unoptimized
                />
            </Link>
        </div>
    );
};

export default FeaturedItem;
