import Image from "next/image";

const PortfolioItem = (props) => {
    return (
        <div>
            <Image
                src={props.src}
                alt="Case"
                width={720}
                height={404}
                className="w-full sm:w-[50vw] scale-up"
            />
        </div>
    );
};

export default PortfolioItem;
