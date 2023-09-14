import Header from "@components/Portfolio/Header";
import PortfolioItem from "@components/Portfolio/PortfolioItem";

const srcData = [
    "/assets/images/portfolio-card-1.png",
    "/assets/images/portfolio-card-2.png",
    "/assets/images/portfolio-card-3.png",
    "/assets/images/portfolio-card-4.png",
    "/assets/images/portfolio-card-5.png",
    "/assets/images/portfolio-card-6.png",
];

const page = () => {
    return (
        <section>
            <Header />
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 grid-rows-2">
                {srcData.map((srcData) => (
                    <PortfolioItem key={srcData} src={srcData} />
                ))}
            </div>
        </section>
    );
};

export default page;
