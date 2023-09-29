import GridItem from "./GridItem";
import Image from "next/image";

const Grid = (props) => {
    const gridData = props.gridData;

    return (
        <section
            className={`grid gap-[24px] lg:gap-[1.25vw] ${props.gridStyle}`}
        >
            {gridData.map((gridData) => (
                <div className={`${gridData.style}`}>
                    <GridItem
                        key={gridData.src}
                        src={gridData.src}
                        w={gridData.w}
                        h={gridData.h}
                        imgStyle={`${gridData.imgStyle}`}
                    />
                </div>
            ))}
        </section>
    );
};

export default Grid;
