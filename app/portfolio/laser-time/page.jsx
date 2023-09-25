import Article1 from "@components/Case/Article1";
import Header from "@components/Case/Header";
import KeyPoints from "@components/Case/KeyPoints";
import Article1_2 from "@components/Case/Article1_2";

const page = (props) => {
    return (
        <section>
            <Header
                mainCover={"/assets/images/laser-time-cover.jpg"}
                mainTitle={"Laser Time"}
            />
            <div className="px-[32px] sm:px-[92px] font-normal">
                <KeyPoints
                    key1="Laser Time"
                    key2="Візуальна ідентичність + Комунікаційна стратегія"
                    key3="США"
                    key4="2023"
                />
                <Article1
                    articleTitle={
                        <>
                            Створили айдентику та комунікацію так, щоб
                            <br /> нічого зайвого.
                        </>
                    }
                    articleText={
                        <>
                            До нас звернувся клієнт з запитом створення
                            айдентики та комунікаційної стратегії для мережі
                            салонів лазерної косметології, які готуються до
                            відкриття по всій Каліфорнії. <br />
                            <br />
                            На найближчі 2 роки в планах відкрити загалом 30
                            салонів по всьому штату. Тому важливо було створити
                            айдентику, яка буде запам’ятовуватися та вирізнятись
                            споміж всіх інших гравців.
                        </>
                    }
                    articleSrc="/assets/images/laser-image-1.jpg"
                />
                <Article1_2
                    articleTitle="Дослідження"
                    articleText={
                        <>
                            Провівши досвідження, ми з’ясували, що головною
                            проблемою для клієнтів, які користуються послугами
                            лазерної косметології є не зовсім той результат, на
                            який вони очікують. Бо з усіх каналів вони чують про
                            те, що комплекс процедур — це один раз і на все
                            життя. А по факту виходить так, що деяке волосся
                            всеодно залишається. І це дуже дратує дівчат. <br />
                            <br />
                            Але не всі дівчата знають про те, що на результат
                            дуже сильно впливає якість самого лазера. Лазер,
                            який робить раз і назавжди коштує дорого і не кожен
                            салон може собі дозволити таку розкіш. Через це на
                            ринку існує велика кількість салонів, які не можуть
                            гарантувати якісні послуги через відсутність
                            належного обладнення. <br />
                            <br />В свою чергу головною конкурентною перевагою
                            салонів нашого клієнта став саме високоякісний
                            лазер, який може гарантувати повне видалення
                            волосся. Окрім самого лазера, студія активно
                            відбирає досвідченних косметологів, які роблять
                            огляд кожної клієнтки і формують всі необхідні
                            рекомендації для досягнення найякіснішого ефекту.
                        </>
                    }
                />
                <Article1_2
                    articleTitle="Нічого зайвого"
                    articleText={
                        <>
                            Саме сфокусованність на досягненні якісного
                            результату стала основою для будування всієї
                            комунікаційної стратегії. Так ми створили лаконічний
                            слоган — Нічого зайвого (Nothing Extra). <br />
                            <br />
                            Який одразу акцентує увагу на тому, що після
                            процедур в салонах Laser Time ви не знайдете на
                            своїй шкірі зайвих волосинок, подразнень чи будь
                            чого, що зіпсує ваші враження. <br />
                        </>
                    }
                />
                <Article1_2
                    articleTitle="Айдентика"
                    articleText={
                        <>
                            Її ми також розробляли так, щоб нічого зайвого.
                            М’який та впізнаванний шрифтовий логотип, фірмовий
                            ніжно рожевий колір, проста, але гнучка дизайн
                            система стали продовженням створенного нами месседжу
                            Nothing Extra. <br />
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default page;
