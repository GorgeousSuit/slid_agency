import ServicesItem from "./ServicesItem";

const servicesData = [
    {
        number: "01",
        title: "Брендинг",
        content: "Placeholder text. Wow! So informative!",
    },
    {
        number: "02",
        title: "Візуальна ідентичність",
        content: "Placeholder text. Wow! So informative!",
    },
    {
        number: "03",
        title: "Дизайн та розробка сайтів",
        content: "Placeholder text. Wow! So informative!",
    },
    {
        number: "04",
        title: "Креативна реклама",
        content: "Placeholder text. Wow! So informative!",
    },
    {
        number: "05",
        title: "UX та продуктовий дизайн",
        content: "Placeholder text. Wow! So informative!",
    },
    {
        number: "06",
        title: "Графічний дизайн",
        content: "Placeholder text. Wow! So informative!",
    },
];

const Services = (props) => {
    return (
        <section className="mx-[32px] lg:mx-[72px] 2xl:mx-[92px] mb-[96px] lg:mb-[128px] 2xl:mb-[241px]">
            <div className="">
                <h1 className="text-[36px] lg:text-[56px] leading-[43.2px] lg:leading-[67.2px] font-normal mb-[64px] lg:mb-[108px]">
                    Наші послуги
                </h1>
                <div className="flex flex-col lg:items-end">
                    {servicesData.map((servicesData, index) => (
                        <ServicesItem
                            key={index}
                            number={servicesData.number}
                            title={servicesData.title}
                            content={servicesData.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
