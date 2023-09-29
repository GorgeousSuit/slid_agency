import Header from "@components/Case/Header";
import KeyPoints from "@components/Case/KeyPoints";
import Article1 from "@components/Case/Article1";
import Article1_2 from "@components/Case/Article1_2";
import Image from "next/image";
import Grid from "@components/Case/Grid";

const page = (props) => {
    const gridData1 = [
        {
            src: "/assets/images/rebel-grid-12.png",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
        {
            src: "/assets/images/rebel-grid-13.png",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
        {
            src: "/assets/images/rebel-grid-14.png",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
        {
            src: "/assets/images/rebel-grid-15.png",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
    ];

    return (
        <section className="font-normal">
            <Header
                mainCover={"/assets/images/rebel-bicycles-cover.jpg"}
                mainTitle={"Rebel Bicycles"}
            />
            <KeyPoints
                key1="Rebel Bicycles"
                key2="Візуальна ідентичність"
                key3="США"
                key4="2023"
            />
            <Article1
                articleTitle={
                    <>
                        Айдентика для <br /> магазину велосипедів у <br />{" "}
                        Лос-Анджелесі
                    </>
                }
                articleText={
                    <>
                        Rebel Bicycles — магазин велосипедів розташований у
                        Лос-Анджелесі. Конкуренція дуже велика, оскільки
                        велосипед є одним з найпопулярніших засобів пересування.{" "}
                        <br />
                        <br />
                        Нам необхідно було розробити логотип та візуальну
                        систему магазину, яка вирізнялась би серед будь яких
                        інших магазинів. <br />
                        <br />І ми це зробили.
                    </>
                }
                articleSrc="/"
                imageStyle="hidden"
            />
            <Image
                src="/assets/images/rebel-1.jpg"
                alt="Image"
                width={1736}
                height={460}
                className="w-full mx-auto lg:w-[90.42vw] lg:h-[23.96vw] max-lg:px-[32px] mb-[64px] lg:mb-[160px]"
            />

            {/* First grid */}
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[32px] lg:space-x-[1.25vw] mb-[32px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-1.png"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-2.png"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
            </div>
            <Image
                src="/assets/images/rebel-grid-3.png"
                alt="Image"
                width={1920}
                height={1000}
                className="w-full mt-[1.25vw]"
            />
            <Image
                src="/assets/images/rebel-grid-4.png"
                alt="Image"
                width={1920}
                height={1000}
                className="w-full mt-[1.25vw] mb-[1.25vw]"
            />
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[32px] lg:space-x-[1.25vw] mb-[32px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-5.png"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-6.png"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83vw] lg:h-[52.08vw]"
                />
            </div>
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[32px] lg:space-x-[1.25vw] mb-[32px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-7.png"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-8.png"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
            </div>
            <Image
                src="/assets/images/rebel-grid-9.png"
                alt="Image"
                width={1920}
                height={1297}
                className="w-full mt-[1.25vw] mb-[1.25vw]"
            />
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[32px] lg:space-x-[1.25vw] mb-[32px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-10.png"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-11.png"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83vw] lg:h-[52.08vw]"
                />
            </div>
            <Grid
                gridData={gridData1}
                gridStyle="grid-rows-4 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 max-lg:mx-[32px]"
            />
        </section>
    );
};

export default page;
