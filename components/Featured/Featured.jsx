import FeaturedItem from './FeaturedItem';
import Image from 'next/image';
import Link from 'next/link';

const srcData = [
    '/assets/images/Case-lg-1.png',
    '/assets/images/Case-lg-2.png',
    '/assets/images/Case-lg-3.png',
    '/assets/images/Case-lg-4.png'
];

const Featured = (props) => {
    return (
        <section>
            <div className="">
                <div className="ml-[72px] gap-[8px] my-[56px]">
                    <h1 className="text-[56px] font-normal leading-[67.2px]">
                        Featured works
                    </h1>
                    <h2 className="text-[24px] font-normal leading-[28.8px] text-[#545454]">
                        Our clients' cases will speak for us
                    </h2>
                </div>
                <div className="relative">
                    {srcData.map((srcData) => (
                        <FeaturedItem key={srcData} src={srcData} />
                    ))}
                    <Link href="/portfolio">
                        <Image
                            src="/assets/images/Full portfolio-lg.svg"
                            alt="Full-Portfolio"
                            width={200}
                            height={200}
                            className="rounded-[100%] absolute bottom-[-100px] right-[72px] animate-spin-slow"
                        />
                    </Link>
                </div>
                <div className="flex gap-[134px] ml-[72px] mt-[128px]">
                    <div className="space-y-[24px]">
                        <h1 className="text-[72px] font-normal leading-[86.4px]">
                            8 years
                        </h1>
                        <h2 className="text-[24px] font-normal leading-[33.6px] text-[#545454]">
                            of experience before <br /> opening your own studio
                        </h2>
                    </div>
                    <div className="space-y-[24px]">
                        <h1 className="text-[72px] font-normal leading-[86.4px]">
                            50+
                        </h1>
                        <h2 className="text-[24px] font-normal leading-[33.6px] text-[#545454]">
                            completed projects from <br /> logo to product
                            design
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
