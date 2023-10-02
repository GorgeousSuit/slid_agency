import Image from "next/image";

const page = () => {
    return (
        <section className="bg-black flex-center">
            <div className="">
                <Image
                    src="/assets/images/sm/featured-laser.webp"
                    alt="Case"
                    width={1920}
                    height={800}
                    
                    className={`w-full max-sm:h-full max-sm:object-cover overflow-x-hidden overflow-y-hidden`}
                />
            </div>
        </section>
    );
};

export default page;
