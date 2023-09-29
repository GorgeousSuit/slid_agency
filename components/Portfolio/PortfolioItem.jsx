import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
    return (
        <div className="relative">
            <Link href={props.href}>
                <Image
                    src={props.src}
                    alt="Case"
                    width={1920}
                    height={1080}
                    className="w-full hover:opacity-0"
                    unoptimized
                />
                <div className="absolute bg-black md:hover:opacity-100 flex flex-col justify-between w-full h-full p-[20px] z-10 opacity-0 top-0 left-0 text-white transition ease-out duration-300">
                    <p className="text-[56px] font-normal">
                        {props.hoverTitle}
                    </p>
                    <p className="text-right text-[24px]">{props.hoverText}</p>
                </div>
            </Link>
        </div>
    );
};

export default PortfolioItem;
