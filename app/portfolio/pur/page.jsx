import Header from "@components/Case/Header";
import KeyPoints from "@components/Case/KeyPoints";
import Article1 from "@components/Case/Article1";
import Article1_2 from "@components/Case/Article1_2";
import ImageText from "@components/Case/ImageText";
import PurImage from "@components/Case/PurImage";
import TwoImageText from "@components/Case/TwoImageText";

const page = (props) => {
    return (
        <section className="">
            <Header
                mainCover={"/assets/images/pur-cover.jpg"}
                mainTitle={"PÜR"}
            />
            <div className="px-[32px] sm:px-[92px] font-normal">
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
                            Fashion — один з найулюбленіших напрямків нашої
                            агенції, бо він поєднує в собі незвичні креативні
                            рішення і справжню естетику. В залежності від
                            концепції бренду, можна виходити за рамки стандартів
                            і патернів і створювати щось особливе. Так сталося і
                            з українським брендом recycling шуб — PÜR. <br />
                            <br /> Ще на етапі формування mood board, ми з
                            клієнтом зійшлись на тому, що в нас total match і по
                            результату буде щось круте.
                        </>
                    }
                    articleSrc="/assets/images/pur-article-image.jpg"
                />
                <Article1_2
                    articleTitle="Прогресивність"
                    articleText={
                        <>
                            Нас надихає прогресивність бренду PÜR, оскільки вони
                            створюють свої моделі з вінтажних шуб, які проходять
                            повну реставрацію. Це дозволяє надати їм друге,
                            більш сучасне життя і при цьому залишатись в
                            контексті світових трендів. <br /> <br /> Так, як
                            кожна модель унікальна, то для нас було важливо
                            акцентувати на них якомога більше уваги.
                        </>
                    }
                />
            </div>
            <PurImage src="/assets/images/pur-image-1.jpg" />
            <ImageText
                src="/assets/images/PuriPhone.jpg"
                text="Для кожної шуби ми створили окрему презентацію на головній сторінці у двох форматах: студія і lookbook. Таким чимон ми поєднуємо інтернет-магазин та fashion естетику. Зправа додали зручну навігацію по номеру моделі та типу хутра, щоб дивитись всі товари одразу, не переходячи між сторінками."
            />
            <PurImage src="/assets/images/pur-image-2.jpg" />
            <TwoImageText
                src1="/assets/images/pur-image-3.jpg"
                src2="/assets/images/pur-image-4.jpg"
            />
        </section>
    );
};

export default page;
