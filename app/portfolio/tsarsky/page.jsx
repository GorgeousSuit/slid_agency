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
                mainCover={"/assets/images/tsarsky-cover.webp"}
                mainTitle={"TSARSKY"}
                bgPosition="bg-left"
            />
            <KeyPoints
                key1="TSARSKY CITY RESORT"
                key2="Розробка сайту"
                key3="Україна"
                key4="2023"
            />
            <Article1
                articleTitle={
                    <>
                        Редизайн сайту
                        <br />
                        найсучасшнішого
                        <br />
                        SPA комплексу
                    </>
                }
                articleText={
                    <>
                        TSARSKY — один з найбільших та найвідоміших SPA-центрів
                        столиці, звернувся до нас за комплексним редизайном
                        всього сайту. Перед нами стояла задача розробити
                        сучасний сайт, але з дуже незвичною ідеєю візуалізації
                        неба.
                        <br />
                        <br />
                        Нам цікаві такі задачі, оскільки вони дають можливість
                        увімкнути креативність на повну та цікаво поєднати речі,
                        які на перший погляд могли б здаватись занадто
                        тривіальними.
                    </>
                }
                articleSrc="/assets/images/tsarsky-1.webp"
                imageStyle="lg:w-[21.67vw] lg:h-[32.81vw]"
            />
            <Article1_2
                articleTitle="Головна сторінка"
                articleText={
                    <>
                        На головній сторінці нас зустрічає промо-відео
                        комплексу, яке при скролі переносить нас на презентацію
                        головної переваги TSARSKY - великого різноманіття видів
                        відпочинку: від аква-лаунжу до Beauty студії. При
                        розробці сайту ми задіяли анімації для створення ефекту
                        паріння у повітрі. Щоб передати легкість, яку відчувають
                        відвідувачи під час відпочинку у комплексі.
                    </>
                }
            />
            <div
                className={`bg-[#E2EDF8] max-lg:p-[32px] lg:py-[8.33vw] w-full lg:h-full mt-[64px] mb-[96px] lg:my-[160px]`}
            >
                <Image
                    src="/assets/images/tsarsky-2.webp"
                    alt="Image"
                    width={1295}
                    height={1918}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
                <Image
                    src="/assets/images/tsarsky-3.webp"
                    alt="Image"
                    width={1295}
                    height={1826}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
            </div>
            <Article1_2
                articleTitle="Зони відпочинку"
                articleText={
                    <>
                        Кожен вид відпочинку має свої зони, які ми розкрили у
                        окремих блоках з описом та якісними фотографіями, аби не
                        навантажувати користувачів зайвим.
                    </>
                }
            />
            <div
                className={`bg-[#E2EDF8] max-lg:p-[32px] lg:py-[8.33vw] w-full lg:h-full mt-[64px] mb-[96px] lg:my-[160px]`}
            >
                <Image
                    src="/assets/images/tsarsky-4.webp"
                    alt="Image"
                    width={1295}
                    height={1831}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
                <Image
                    src="/assets/images/tsarsky-5.webp"
                    alt="Image"
                    width={1295}
                    height={1448}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
                <Image
                    src="/assets/images/tsarsky-6.webp"
                    alt="Image"
                    width={1295}
                    height={1396}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
                <Image
                    src="/assets/images/tsarsky-7.webp"
                    alt="Image"
                    width={1295}
                    height={849}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
            </div>
            <div className="flex flex-col lg:flex-row mx-[32px] my-[96px] lg:my-[170px] max-lg:space-y-[64px] lg:space-x-[17.03vw] justify-center">
                <Image
                    src="/assets/images/tsarsky-phone-1.webp"
                    alt="Image"
                    width={300}
                    height={612}
                    className="w-[41.73vw] h-[84.99vw] lg:w-[15.63vw] lg:h-[31.98vw] lg:mb-[122px] self-end"
                />
                <Image
                    src="/assets/images/tsarsky-phone-2.webp"
                    alt="Image"
                    width={300}
                    height={614}
                    className="w-[41.73vw] h-[84.99vw] lg:w-[15.63vw] lg:h-[31.98vw] lg:mt-[120px]"
                />
            </div>
            <div
                className={`bg-[#E2EDF8] max-lg:p-[32px] lg:py-[8.33vw] w-full lg:h-full mt-[64px] mb-[96px] lg:my-[160px]`}
            >
                <Image
                    src="/assets/images/tsarsky-8.webp"
                    alt="Image"
                    width={1295}
                    height={1605}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
                <Image
                    src="/assets/images/tsarsky-9.webp"
                    alt="Image"
                    width={1295}
                    height={1594}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
                <Image
                    src="/assets/images/tsarsky-10.webp"
                    alt="Image"
                    width={1295}
                    height={556}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
            </div>
            <Article1_2
                articleTitle="Розклад"
                articleText={
                    <>
                        Також важливою і корисною є сторінка з розкладом
                        групових занять для відвідувачів фітнес центру. Їй ми
                        приділили окрему увагую, сфокусувавшись на зручній
                        навігації як з десктопів так і мобільних телефонів.
                    </>
                }
            />
            <div
                className={`bg-[#E2EDF8] max-lg:p-[32px] lg:py-[8.33vw] w-full lg:h-full mt-[64px] mb-[96px] lg:my-[160px]`}
            >
                <Image
                    src="/assets/images/tsarsky-11.webp"
                    alt="Image"
                    width={1295}
                    height={1118}
                    className="w-full lg:w-[67.45vw] mx-auto"
                />
            </div>
            <Article1_2
                articleTitle="Mobile"
                articleText={
                    <>
                        Більша частина користувачів передивляються сайт з
                        мобільного пристрою в пошуках необхідної інформації.
                        Тому на смартфонах ми прибрали анімації, віддавши
                        перевагу змісту.
                    </>
                }
            />
            <section className="flex flex-col my-[96px] lg:my-[160px] max-lg:space-y-[64px] px-[32px] lg:px-[16.25vw]">
                <div className="flex flex-col lg:flex-row lg:space-x-[16.25vw] max-lg:space-y-[64px]">
                    <Image
                        src="/assets/images/tsarsky-phone-3.webp"
                        alt="Image"
                        width={300}
                        height={614}
                        className="w-[41.73vw] h-[84.99vw] lg:w-[15.63vw] lg:h-[31.98vw] lg:mt-[160px] self-end"
                    />
                    <Image
                        src="/assets/images/tsarsky-phone-4.webp"
                        alt="Image"
                        width={300}
                        height={612}
                        className="w-[41.73vw] h-[84.99vw] lg:w-[15.63vw] lg:h-[31.98vw] lg:mb-[162px]"
                    />
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-[16.25vw] justify-end max-lg:space-y-[64px] ">
                    <Image
                        src="/assets/images/tsarsky-phone-5.webp"
                        alt="Image"
                        width={300}
                        height={614}
                        className="w-[41.73vw] h-[84.99vw] lg:w-[15.63vw] lg:h-[31.98vw] lg:mt-[160px] self-end"
                    />
                    <Image
                        src="/assets/images/tsarsky-phone-6.webp"
                        alt="Image"
                        width={300}
                        height={614}
                        className="w-[41.73vw] h-[84.99vw] lg:w-[15.63vw] lg:h-[31.98vw] lg:mb-[160px]"
                    />
                </div>
            </section>
            <OtherWorks
                src1="/assets/images/portfolio-card-4.webp"
                href1="/portfolio/pur"
                src2="/assets/images/portfolio-card-3.webp"
                href2="/portfolio/proove"
            />
        </section>
    );
};

export default page;
