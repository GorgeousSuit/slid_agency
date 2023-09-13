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
                <div className="mx-[32px] sm:mx-[72px] gap-[16px] sm:gap-[8px] my-[56px]">
                    <h1 className="text-[36px] sm:text-[56px] font-normal leading-[43.2px] sm:leading-[67.2px]">
                        Featured works
                    </h1>
                    <h2 className="text-[20px] sm:text-[24px] font-normal leading-[24px] sm:leading-[28.8px] text-[#545454]">
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
                            className="rounded-[100%] absolute bottom-[-100px] right-[32px] sm:right-[72px] animate-spin-slow"
                        />
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-[6.979vw] ml-[32px] sm:ml-[3.75vw] mt-[99px] sm:mt-[128px]">
                    <div className="space-y-[24px]">
                        <h1 className="text-[32px] sm:text-[72px] font-normal leading-[38.4px] sm:leading-[86.4px]">
                            8 years
                        </h1>
                        <h2 className="text-[20px] sm:text-[24px] font-normal leading-[28px] sm:leading-[33.6px] text-[#545454]">
                            of experience before{' '}
                            <br className="hidden sm:block" /> opening{' '}
                            <br className="sm:hidden" /> your own studio
                        </h2>
                    </div>
                    <div className="space-y-[24px]">
                        <h1 className="text-[32px] sm:text-[72px] font-normal leading-[38.4px] sm:leading-[86.4px]">
                            50+
                        </h1>
                        <h2 className="text-[20px] sm:text-[24px] font-normal leading-[28px] sm:leading-[33.6px text-[#545454]">
                            completed projects from{' '}
                            <br className="hidden sm:block" /> logo to
                            <br className="sm:hidden" /> product design
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
