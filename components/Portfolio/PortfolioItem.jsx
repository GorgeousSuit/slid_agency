import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
    return (
        <div className={`relative ${props.style}`}>
            <Link href={props.href}>
                <Image
                    src={props.src}
                    alt="Case"
                    width={1920}
                    height={1080}
                    className="w-full hover:opacity-0"
                    unoptimized
                />
                <div className="absolute bg-black md:hover:opacity-100 flex flex-col justify-between w-full h-full p-[32px] z-[5] opacity-0 top-0 left-0 text-white transition ease-out duration-300 font-normal">
                    <p className="text-[24px]">{props.hoverText}</p>
                    <p className="text-[72px]">{props.hoverTitle}</p>
                </div>
            </Link>
        </div>
    );
};

export default PortfolioItem;
