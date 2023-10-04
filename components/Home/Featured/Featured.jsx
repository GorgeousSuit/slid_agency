import FeaturedItem from "./FeaturedItem";
import Image from "next/image";
import Link from "next/link";

const srcData = [
    {
        src: "/assets/images/featured-tsarsky.webp",
        href: "/portfolio/tsarsky",
        style: "",
    },
    {
        src: "/assets/images/featured-laser.webp",
        href: "/portfolio/laser-time",
        srcSet: "/assets/images/sm/featured-laser-sm.webp 393w, /assets/images/featured-laser.webp 1920w",
        sizes: "(max-width: 393px) 393px, 1920px",
    },
    {
        src: "/assets/images/featured-pur.webp",
        href: "/portfolio/pur",
        style: "max-sm:object-[-50px_top]",
    },
    {
        src: "/assets/images/rebel-cover.webp",
        href: "/portfolio/rebel-bicycles",
        style: "",
    },
];

const Featured = (props) => {
    return (
        <section>
            <div className="mx-[32px] sm:mx-[72px] 2xl:mx-[92px] space-y-[16px] sm:space-y-[8px] mb-[48px] sm:mb-[56px] 2xl:mb-[79.67px]">
                <h1 className="text-[36px] sm:text-[56px] font-normal leading-[43.2px] sm:leading-[67.2px]">
                    Обрані роботи
                </h1>
                <h2 className="text-[20px] sm:text-[24px] font-normal leading-[24px] sm:leading-[28.8px] text-[#545454]">
                    Кейси наших клієнтів говорять за нас
                </h2>
            </div>
            <div className="relative">
                {srcData.map((srcData) => (
                    <FeaturedItem
                        key={srcData.href}
                        src={srcData.src}
                        href={srcData.href}
                        style={srcData.style}
                    />
                ))}
                <Link href="/portfolio">
                    <Image
                        src="/assets/images/Full portfolio-ua.svg"
                        alt="Full-Portfolio"
                        width={150}
                        height={150}
                        className="sm:w-[200px] sm:h-[200px] rounded-[100%] absolute bottom-[-75px] sm:bottom-[-100px] right-[32px] sm:right-[72px] 2xl:right-[92px] animate-spin-slow"
                    />
                </Link>
            </div>
            <div className="gap-[48px] sm:gap-[64px] flex flex-col sm:flex-row ml-[32px] sm:ml-[3.75vw] 2xl:ml-[92px] mt-[99px] sm:mt-[128px]">
                <div className="space-y-[16px] sm:space-y-[24px]">
                    <h1 className="text-[32px] sm:text-[72px] font-normal leading-[38.4px] sm:leading-[86.4px]">
                        8 років
                    </h1>
                    <h2 className="text-[20px] sm:text-[24px] font-normal leading-[28px] sm:leading-[33.6px] text-[#545454]">
                        досвіду перед відкриттям
                        <br /> власної агенції
                    </h2>
                </div>
                <div className="space-y-[16px] sm:space-y-[24px]">
                    <h1 className="text-[32px] sm:text-[72px] font-normal leading-[38.4px] sm:leading-[86.4px]">
                        50+
                    </h1>
                    <h2 className="text-[20px] sm:text-[24px] font-normal leading-[28px] sm:leading-[33.6px] text-[#545454]">
                        реалізованих проектів від
                        <br /> логотипу до дизайну продукту
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Featured;
