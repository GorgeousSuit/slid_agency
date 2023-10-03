import Header from "@components/Portfolio/PortfolioHeader";
import PortfolioItem from "@components/Portfolio/PortfolioItem";

const srcData = [
    {
        src: "/assets/images/portfolio-card-1.png",
        href: "/portfolio/laser-time",
        hoverTitle: "Laser Time",
        hoverText: "Візуальна ідентичність + Комунікаційна стратегія",
    },
    {
        src: "/assets/images/portfolio-card-2.png",
        href: "/portfolio/rebel-bicycles",
        hoverTitle: "Rebel Bicycles",
        hoverText: "Візуальна ідентичність",
    },
    {
        src: "/assets/images/portfolio-card-3.png",
        href: "/portfolio/proove",
        hoverTitle: "Proove",
        hoverText: "Розробка дизайну сайту",
    },
    {
        src: "/assets/images/portfolio-card-4.png",
        href: "/portfolio/pur",
        hoverTitle: "PÜR",
        hoverText: "Розробка сайту",
    },
];

const page = () => {
    const scrollToFooter = () => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section>
            <Header />
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 grid-rows-2">
                {srcData.map((srcData) => (
                    <PortfolioItem
                        key={srcData}
                        src={srcData.src}
                        href={srcData.href}
                        hoverTitle={srcData.hoverTitle}
                        hoverText={srcData.hoverText}
                    />
                ))}
            </div>
        </section>
    );
};

export default page;
