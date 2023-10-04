import Header from "@components/Portfolio/PortfolioHeader";
import PortfolioItem from "@components/Portfolio/PortfolioItem";
import AnimationComponent from "@components/Home/AnimationComponent";
import Image from "next/image";
import Link from "next/link";

const srcData = [
    {
        src: "/assets/images/portfolio-card-5.webp",
        href: "/portfolio/tsarsky",
        hoverTitle: "TSARSKY",
        hoverText: "Розробка сайту",
    },
    {
        src: "/assets/images/portfolio-card-1.webp",
        href: "/portfolio/laser-time",
        hoverTitle: "Laser Time",
        hoverText: "Візуальна ідентичність + Комунікаційна стратегія",
    },
    {
        src: "/assets/images/portfolio-card-4.webp",
        href: "/portfolio/pur",
        hoverTitle: "PÜR",
        hoverText: "Розробка сайту",
    },
    {
        src: "/assets/images/portfolio-card-3.webp",
        href: "/portfolio/proove",
        hoverTitle: "Proove",
        hoverText: "Розробка дизайну сайту",
    },
    {
        src: "/assets/images/portfolio-card-2.webp",
        href: "/portfolio/rebel-bicycles",
        hoverTitle: "Rebel Bicycles",
        hoverText: "Розробка дизайну сайту",
        style: "lg:hidden",
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
                        style={srcData.style}
                    />
                ))}
            </div>
            <div className="relative max-lg:hidden">
                <Link href="/portfolio/rebel-bicycles">
                    <Image
                        src="/assets/images/portfolio-card-lg-2.webp"
                        alt="Image"
                        width={1920}
                        height={534}
                        className="w-full"
                    />
                    <div className="absolute bg-black md:hover:opacity-100 flex flex-col justify-between w-full h-full p-[32px] z-[5] opacity-0 top-0 left-0 text-white transition ease-out duration-300 font-normal">
                        <p className="xl:text-[24px]">Візуальна ідентичність</p>
                        <p className="text-[28px] lg:text-[48px] 2xl:text-[72px] leading-[110%]">
                            Rebel Bicycles
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default page;
