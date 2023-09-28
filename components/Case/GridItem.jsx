import Image from "next/image";

const GridItem = (props) => {
    return (
        <section>
            <Image
                src={props.src}
                alt="Grid Image"
                width={props.w}
                height={props.h}
                className={`w-full h-fit ${props.imgStyle}`}
            />
        </section>
    );
};

export default GridItem;
