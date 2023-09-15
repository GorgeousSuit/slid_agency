import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
    return (
        <div>
            <Link href={props.href}>
                <Image
                    src={props.src}
                    alt="Case"
                    width={720}
                    height={404}
                    className="w-full sm:w-[50vw] scale-up"
                />
            </Link>
        </div>
    );
};

export default PortfolioItem;
