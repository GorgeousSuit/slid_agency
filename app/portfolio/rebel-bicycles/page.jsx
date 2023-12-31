import Header from "@components/Case/CaseHeader";
import KeyPoints from "@components/Case/KeyPoints";
import Article1 from "@components/Case/Article1";
import Article1_2 from "@components/Case/Article1_2";
import Image from "next/image";
import Grid from "@components/Case/Grid";
import OtherWorks from "@components/Case/OtherWorks";

const page = (props) => {
    const gridData1 = [
        {
            src: "/assets/images/rebel-grid-12.webp",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
        {
            src: "/assets/images/rebel-grid-13.webp",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
        {
            src: "/assets/images/rebel-grid-14.webp",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
        {
            src: "/assets/images/rebel-grid-15.webp",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
    ];

    return (
        <section className="font-normal">
            <Header
                mainCover={"/assets/images/rebel-cover.webp"}
                mainTitle={"Rebel Bicycles"}
                bgPosition="bg-right"
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
                src="/assets/images/rebel-1.webp"
                alt="Image"
                width={1736}
                height={460}
                className="w-full mx-auto lg:w-[90.42vw] lg:h-[23.96vw] max-lg:px-[32px] mb-[64px] lg:mb-[160px]"
            />

            {/* First grid */}
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[24px] lg:space-x-[1.25vw] mb-[24px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-1.webp"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-2.webp"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
            </div>
            <Image
                src="/assets/images/rebel-grid-3.webp"
                alt="Image"
                width={1920}
                height={1000}
                className="w-full mt-[24px] lg:mt-[1.25vw]"
            />
            <Image
                src="/assets/images/rebel-grid-4.webp"
                alt="Image"
                width={1920}
                height={1000}
                className="w-full mt-[24px] lg:mt-[1.25vw] mb-[24px] lg:mb-[1.25vw]"
            />
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[24px] lg:space-x-[1.25vw] mb-[24px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-5.webp"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-6.webp"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83vw] lg:h-[52.08vw]"
                />
            </div>
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[24px] lg:space-x-[1.25vw] mb-[24px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-7.webp"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-8.webp"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
            </div>
            <Image
                src="/assets/images/rebel-grid-9.webp"
                alt="Image"
                width={1920}
                height={1297}
                className="w-full mt-[24px] lg:mt-[1.25vw] mb-[24px] lg:mb-[1.25vw]"
            />
            <div className="w-full max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[24px] lg:space-x-[1.25vw] mb-[24px] lg:mb-[1.25vw] overflow-x-hidden">
                <Image
                    src="/assets/images/rebel-grid-10.webp"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.92vw] lg:h-[52.08vw]"
                />
                <Image
                    src="/assets/images/rebel-grid-11.webp"
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
            <OtherWorks
                src1="/assets/images/portfolio-card-5.webp"
                href1="/portfolio"
                src2="/assets/images/portfolio-card-3.webp"
                href2="/portfolio/proove"
            />
        </section>
    );
};

export default page;
