import Image from "next/image";
import Logo from "/public/assets/images/logo-lg.svg"

const Loading = () => {
    const open = true;

    return (
        <section className="bg-black w-full h-[100vh] flex-center">
            <Logo className="animate-pulse"/>
        </section>
    );
};

export default Loading;
