import Image from "next/image";

const loading = () => {
    return (
        <section className="bg-black w-[100vw] h-[100vh] flex-center">
            <Image
                src="/assets/images/logo-lg.svg"
                alt="Logo-lg"
                width={330}
                height={195}
                className="animate-pulse"
            />
        </section>
    );
};

export default loading;
