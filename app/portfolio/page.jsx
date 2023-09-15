import Header from "@components/Portfolio/Header";
import PortfolioItem from "@components/Portfolio/PortfolioItem";

const srcData = [
    {
        src: "/assets/images/portfolio-card-1.png",
        href: "/laser-time",
    },
    {
        src: "/assets/images/portfolio-card-2.png",
        href: "/",
    },
    {
        src: "/assets/images/portfolio-card-3.png",
        href: "/",
    },
    {
        src: "/assets/images/portfolio-card-4.png",
        href: "/",
    },
    {
        src: "/assets/images/portfolio-card-5.png",
        href: "/",
    },
    {
        src: "/assets/images/portfolio-card-6.png",
        href: "/",
    },
];

const page = () => {
    return (
        <section>
            <Header />
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 grid-rows-2">
                {srcData.map((srcData) => (
                    <PortfolioItem
                        key={srcData}
                        src={srcData.src}
                        href={srcData.href}
                    />
                ))}
            </div>
        </section>
    );
};

export default page;
