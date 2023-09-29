import Header from "@components/Case/Header";
import KeyPoints from "@components/Case/KeyPoints";
import Article1 from "@components/Case/Article1";
import Article1_2 from "@components/Case/Article1_2";
import Image from "next/image";
import Video from "@components/Case/Video";

const page = (props) => {
    return (
        <section className="font-normal">
            <Header
                mainCover={"/assets/images/proove-cover.jpg"}
                mainTitle={"Proove"}
                bgPosition="bg-center"
            />
            <KeyPoints
                key1="Proove"
                key2="Розробка дизайну сайту"
                key3="Україна"
                key4="2023"
            />
            <Article1
                articleTitle={
                    <>
                        Розробили дизайн
                        <br /> сайту каталогу для
                        <br /> виробника гаджетів та
                        <br /> аксесуарів
                    </>
                }
                articleText={
                    <>
                        Proove — бренд, який належить великому українському
                        дистриб’ютору гаджетів та аксесуарів з Китаю. Якщо
                        Proove починався з електросамокатів, які досі є
                        флагманським продуктом компанії, то зараз асортимент
                        компанії значно розширяється. У зв’язку з цим, старий
                        сайт вже не відповідав новим потребам і необхідно було
                        розробити новий дизайн.
                        <br />
                        <br />
                        Сайт являє собою каталог з описом товарів, але без
                        можливості придбати товар безпосередньо на сайті.
                    </>
                }
                articleSrc="/assets/images/proove-1.jpg"
            />
            <Article1_2
                articleTitle="Завдання"
                articleText={
                    <>
                        Головним завданням було створити можливість відображати
                        в межах однієї картки моделі з різними модифікаціями.
                        Наприклад кабель може мати різну довжину, колір та типи
                        конекторів, але це все ще один і той самий кабель.
                        <br />
                        <br />
                        Нам потрібно було розробити досить простий і зрозумілий
                        дизайн сайту, оскільки аудиторія бренду дуже
                        різноманітна. Це не сайт конкретного продукту, а каталог
                        дуже різних категорій, від навушників до автомобільних
                        аксесуарів. Але в той же час ми хотіли додати йому нотку
                        сучасності.
                    </>
                }
            />
            <Video
                src="/assets/videos/Proove-1.mp4"
                style="lg:mt-[160px] lg:mx-[92px]"
            />
            <div
                className={`bg-[#D0E5F5] max-lg:p-[32px] lg:py-[8.33vw] w-full lg:h-full my-[64px] lg:my-[160px]`}
            >
                <Image
                    src="/assets/images/proove-2.jpg"
                    alt="Image"
                    width={1295}
                    height={2021}
                    className="w-full lg:w-[67.45vw] lg:h-[105.26vw] mx-auto"
                />
                <Image
                    src="/assets/images/proove-3.jpg"
                    alt="Image"
                    width={1295}
                    height={2249}
                    className="w-full lg:w-[67.45vw] lg:h-[117.14vw] mx-auto"
                />
            </div>
            <Article1_2
                articleTitle="Каталог"
                articleText={
                    <>
                        Враховуючи обмежену кількість категорій, ми розділили
                        екран каталогу на дві частини. Зліва ви можете зручно
                        знайти та обрати категорію, яка вас цікавить, а справа -
                        одразу побачити результат пошуку.
                        <br />
                        <br />
                        Також, за замовчуванням, при відкритті сторінки каталогу
                        одразу завантажуються найновіші товари.
                    </>
                }
            />
            <div
                className={`bg-[#D0E5F5] max-lg:p-[32px] lg:py-[8.33vw] w-full lg:h-full my-[64px] lg:my-[160px]`}
            >
                <Image
                    src="/assets/images/proove-4.jpg"
                    alt="Image"
                    width={1295}
                    height={1366}
                    className="w-full lg:w-[67.45vw] lg:h-[71.15vw] mx-auto"
                />
                <Image
                    src="/assets/images/proove-5.jpg"
                    alt="Image"
                    width={1295}
                    height={1164}
                    className="w-full lg:w-[67.45vw] lg:h-[60.63vw] mx-auto"
                />
            </div>
            <section className="flex flex-col lg:flex-row mx-[32px] lg:mx-[16.25vw] justify-between lg:mb-[160px] items-center max-lg:space-y-[64px] max-lg:mt-[32px] mb-[64px]">
                <div className="">
                    <Image
                        src="/assets/images/proove-phone-1.jpg"
                        alt="Image"
                        width={270}
                        height={584}
                        className=""
                    />
                </div>
                <div className="max-lg:space-y-[64px]">
                    <p className="lg:text-[20px] leading-[22.4px] lg:leading-[28px] text-[#545454] lg:w-[33.13vw]">
                        Поділ екрану на дві частини дозволив дуже зручно
                        адаптувати рішення під екран смартфона. Ми також додали
                        таку логіку для пошуку потрібної категорії в меню.
                    </p>
                    <Image
                        src="/assets/images/proove-phone-2.jpg"
                        alt="Image"
                        width={270}
                        height={584}
                        className="lg:mt-[160px] max-lg:mx-auto"
                    />
                </div>
            </section>
            <Article1_2
                articleTitle="Картка товару"
                articleText={
                    <>
                        Особливістю картки товару є те, що в деяких категоріях
                        існують різні модифікації одного товару. Тому нам
                        потрібно було створити єдину загальну картку товару, але
                        з урахуванням того, що він може мати різні технічні
                        модифікації.
                    </>
                }
            />
            <div className="max-lg:w-full max-lg:space-y-[64px] lg:space-x-[24px] flex flex-col lg:flex-row mb-[64px] lg:mb-[160px] lg:mt-[160px]">
                <div className="bg-[#D0E5F5]">
                    <Image
                        src="/assets/images/proove-6.jpg"
                        alt="Image"
                        width={329}
                        height={220}
                        className="w-[83.72vw] lg:w-[38.96vw] mx-auto lg:m-[5.21vw] max-lg:p-[32px]"
                        unoptimized
                    />
                </div>
                <div className="bg-[#D0E5F5]">
                    <Image
                        src="/assets/images/proove-7.jpg"
                        alt="Image"
                        width={329}
                        height={220}
                        className="w-[83.72vw] lg:w-[38.96vw] mx-auto lg:m-[5.21vw] max-lg:p-[32px]"
                        unoptimized
                    />
                </div>
            </div>
            <Video
                src="/assets/videos/Proove-2.mp4"
                style="lg:mt-[160px] lg:mx-[92px]"
            />
        </section>
    );
};

export default page;
