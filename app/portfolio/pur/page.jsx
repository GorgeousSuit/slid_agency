import Header from "@components/Case/CaseHeader";
import KeyPoints from "@components/Case/KeyPoints";
import Article1 from "@components/Case/Article1";
import Article1_2 from "@components/Case/Article1_2";
import ImageText from "@components/Case/ImageText";
import PurImage from "@components/Case/PurImage";
import TwoImageText from "@components/Case/TwoImageText";
import TwoImage from "../../../components/Case/TwoImage";
import TwoPurImage from "../../../components/Case/TwoPurImage";
import OtherWorks from "@components/Case/OtherWorks";

const page = (props) => {
    return (
        <section className="font-normal">
            <Header
                bgPosition="bg-[-100px_top] lg:bg-center"
                mainCover={"/assets/images/pur-cover.webp"}
                mainTitle={"PÜR"}
            />

            <KeyPoints
                key1="PÜR"
                key2="Розробка сайту"
                key3="Україна"
                key4="2023"
            />
            <Article1
                articleTitle="Fashion — то любов"
                articleText={
                    <>
                        Fashion — один з найулюбленіших напрямків нашої агенції,
                        бо він поєднує в собі незвичні креативні рішення і
                        справжню естетику. В залежності від концепції бренду,
                        можна виходити за рамки стандартів і патернів і
                        створювати щось особливе. Так сталося і з українським
                        брендом recycling шуб — PÜR. <br />
                        <br /> Ще на етапі формування mood board, ми з клієнтом
                        зійшлись на тому, що в нас total match і по результату
                        буде щось круте.
                    </>
                }
                articleSrc="/assets/images/pur-1.webp"
                imageStyle="lg:w-[21.67vw] lg:h-[32.81vw]"
            />
            <Article1_2
                articleTitle="Прогресивність"
                articleText={
                    <>
                        Нас надихає прогресивність бренду PÜR, оскільки вони
                        створюють свої моделі з вінтажних шуб, які проходять
                        повну реставрацію. Це дозволяє надати їм друге, більш
                        сучасне життя і при цьому залишатись в контексті
                        світових трендів. <br /> <br /> Так, як кожна модель
                        унікальна, то для нас було важливо акцентувати на них
                        якомога більше уваги.
                    </>
                }
            />

            <PurImage src="/assets/images/pur-image-1.webp" />
            <ImageText
                src="/assets/images/pur-phone-1.webp"
                text="Для кожної шуби ми створили окрему презентацію на головній сторінці у двох форматах: студія і lookbook. Таким чином ми поєднуємо інтернет-магазин та fashion естетику. Справа додали зручну навігацію по номеру моделі та типу хутра, щоб дивитись всі товари одразу, не переходячи між сторінками."
            />
            <PurImage src="/assets/images/pur-image-2.webp" />
            <TwoImageText
                src1="/assets/images/pur-image-3.webp"
                src2="/assets/images/pur-image-4.webp"
                title="Сторінка товару"
                text="Сторінку товару ми зробили з фотографією на весь екран, для можливості краще роздивлятись хутро з різних ракурсів."
            />

            <PurImage src="/assets/images/pur-image-5.webp" />
            <PurImage src="/assets/images/pur-image-6.webp" />

            <TwoImage
                src1="/assets/images/pur-phone-2.webp"
                src1Style="w-[20.83vw] h-[42.6vw] lg:ml-[11.46vw] min-w-[164px] min-h-[335px]"
                src2="/assets/images/pur-image-7.webp"
            />
            <TwoPurImage
                src1="/assets/images/pur-image-8.webp"
                src2="/assets/images/pur-image-9.webp"
                style=""
            />
            <PurImage src="/assets/images/pur-image-10.webp" />
            <OtherWorks
                src1="/assets/images/portfolio-card-5.webp"
                href1="/portfolio/tsarsky"
                src2="/assets/images/portfolio-card-3.webp"
                href2="/portfolio/proove"
            />
        </section>
    );
};

export default page;
