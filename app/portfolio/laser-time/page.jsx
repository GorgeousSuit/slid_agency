import Article1 from "@components/Case/Article1";
import Header from "@components/Case/CaseHeader";
import KeyPoints from "@components/Case/KeyPoints";
import Article1_2 from "@components/Case/Article1_2";
import Image from "next/image";
import Grid from "@components/Case/Grid";
import OtherWorks from "@components/Case/OtherWorks";

const page = (props) => {
    const gridData1 = [
        {
            src: "/assets/images/laser-grid-1.webp",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
        {
            src: "/assets/images/laser-grid-2.webp",
            w: "948",
            h: "948",
            style: "",
            imgStyle: "",
        },
    ];

    return (
        <section className="font-normal">
            <Header
                mainCover={"/assets/images/laser-time-cover.webp"}
                mainTitle={"Laser Time"}
                bgPosition="bg-center"
            />
            <KeyPoints
                key1="Laser Time"
                key2="Візуальна ідентичність + Комунікаційна стратегія"
                key3="США"
                key4="2023"
            />
            <Article1
                articleTitle={
                    <>
                        Створили айдентику та <br /> комунікацію так, щоб
                        <br /> нічого зайвого.
                    </>
                }
                articleText={
                    <>
                        До нас звернувся клієнт з запитом створення айдентики та
                        комунікаційної стратегії для мережі салонів лазерної
                        косметології, які готуються до відкриття по всій
                        Каліфорнії. <br />
                        <br />
                        На найближчі 2 роки в планах відкрити загалом 30 салонів
                        по всьому штату. Тому важливо було створити айдентику,
                        яка буде запам’ятовуватися та вирізнятись споміж всіх
                        інших гравців.
                    </>
                }
                articleSrc="/assets/images/laser-image-1.webp"
                imageStyle="lg:w-[21.67vw] lg:h-[32.81vw]"
            />
            <Article1_2
                articleTitle="Дослідження"
                articleText={
                    <>
                        Провівши досвідження, ми з’ясували, що головною
                        проблемою для клієнтів, які користуються послугами
                        лазерної косметології є не зовсім той результат, на який
                        вони очікують. Бо з усіх каналів вони чують про те, що
                        комплекс процедур — це один раз і на все життя. А по
                        факту виходить так, що деяке волосся всеодно
                        залишається. І це дуже дратує дівчат. <br />
                        <br />
                        Але не всі дівчата знають про те, що на результат дуже
                        сильно впливає якість самого лазера. Лазер, який робить
                        раз і назавжди коштує дорого і не кожен салон може собі
                        дозволити таку розкіш. Через це на ринку існує велика
                        кількість салонів, які не можуть гарантувати якісні
                        послуги через відсутність належного обладнення. <br />
                        <br />В свою чергу головною конкурентною перевагою
                        салонів нашого клієнта став саме високоякісний лазер,
                        який може гарантувати повне видалення волосся. Окрім
                        самого лазера, студія активно відбирає досвідченних
                        косметологів, які роблять огляд кожної клієнтки і
                        формують всі необхідні рекомендації для досягнення
                        найякіснішого ефекту.
                    </>
                }
            />
            <Image
                src="/assets/images/laser-image-2.webp"
                alt="Image"
                width={1920}
                height={1080}
                className="mx-auto w-[83.72vw] h-[55.98vw] lg:w-[856px] lg:h-[560px] my-[64px] lg:my-[160px] lg:ml-[11.46vw]"
            />
            <Article1_2
                articleTitle="Нічого зайвого"
                articleText={
                    <>
                        Саме сфокусованність на досягненні якісного результату
                        стала основою для будування всієї комунікаційної
                        стратегії. Так ми створили лаконічний слоган — Нічого
                        зайвого (Nothing Extra). <br />
                        <br />
                        Який одразу акцентує увагу на тому, що після процедур в
                        салонах Laser Time ви не знайдете на своїй шкірі зайвих
                        волосинок, подразнень чи будь чого, що зіпсує ваші
                        враження. <br />
                    </>
                }
            />
            <Image
                src="/assets/images/laser-image-3.webp"
                alt="Image"
                width={1920}
                height={1080}
                className="w-full my-[64px] lg:my-[160px]"
            />
            <Article1_2
                articleTitle="Айдентика"
                articleText={
                    <>
                        Її ми також розробляли так, щоб нічого зайвого. М’який
                        та впізнаванний шрифтовий логотип, фірмовий ніжно
                        рожевий колір, проста, але гнучка дизайн система стали
                        продовженням створенного нами месседжу Nothing Extra.{" "}
                        <br />
                    </>
                }
            />
            <Image
                src="/assets/images/Laser-Time-logo.svg"
                alt="Image"
                width={300}
                height={50}
                className="lg:w-[730px] lg:h-[119px] mx-auto mt-[96px] mb-[96px] lg:mt-[320px] lg:mb-[200px]"
            />
            {/* First grid */}
            <Grid
                gridData={gridData1}
                gridStyle="grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 auto-cols-min auto-rows-[fit-content]"
            />
            <Image
                src="/assets/images/laser-grid-3.webp"
                alt="Image"
                width={1920}
                height={1000}
                className="w-full mt-[24px]"
            />
            {/* Blueprint */}
            <Image
                src="/assets/images/laser-image-4.webp"
                alt="Image"
                width={1736}
                height={904}
                className="w-full h-full my-[32px] lg:my-[160px] lg:px-[92px]"
            />
            <div className="hidden space-y-[32px] w-[fit-content] mx-auto my-[64px]">
                <Image
                    src="/assets/images/laser-image-4-1.webp"
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="w-[329px] h-[468px]"
                    unoptimized
                />
                <Image
                    src="/assets/images/laser-image-4-2.webp"
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="w-[329px] h-[634px]"
                    unoptimized
                />
                <Image
                    src="/assets/images/laser-image-4-3.webp"
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="w-[329px] h-[518px]"
                    unoptimized
                />
            </div>
            {/* The Last grid */}
            <div className="max-lg:px-[32px] flex flex-col lg:flex-row max-lg:space-y-[32px] lg:space-x-[1.25%] mb-[32px] lg:mb-[1.25vw]">
                <Image
                    src="/assets/images/laser-grid-4.webp"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.916%]"
                />
                <Image
                    src="/assets/images/laser-grid-5.webp"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83%]"
                />
            </div>
            <div className="w-full max-lg:px-[32px] flex-col lg:flex-row max-lg:space-y-[32px] lg:space-x-[1.25%] mb-[32px] lg:mb-[1.25vw] flex">
                <Image
                    src="/assets/images/laser-grid-6.webp"
                    alt="Image"
                    width={1168}
                    height={1000}
                    className="max-lg:w-full lg:w-[60.83%]"
                />
                <Image
                    src="/assets/images/laser-grid-7.webp"
                    alt="Image"
                    width={728}
                    height={1000}
                    className="max-lg:w-full lg:w-[37.916%]"
                />
            </div>
            <OtherWorks
                src1="/assets/images/portfolio-card-2.webp"
                href1="/portfolio/rebel-bicycles"
                src2="/assets/images/portfolio-card-5.webp"
                href2="/portfolio/tsarsky"
            />
        </section>
    );
};

export default page;
