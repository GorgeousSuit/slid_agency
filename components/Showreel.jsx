import Image from 'next/image';

const Showreel = () => {
    return (
        <section className="">
            <div className=" flex relative">
                <Image
                    src="/assets/images/Cover 1-lg.png"
                    alt="Showreel-lg"
                    className=""
                    width={1920}
                    height={1080}
                />
                <Image
                    src="/assets/images/Play.svg"
                    alt="Play"
                    className="absolute bottom-[calc(50%-48px)] left-[calc(50%-48px)]"
                    width={96}
                    height={96}
                />
            </div>
        </section>
    );
};

export default Showreel;
