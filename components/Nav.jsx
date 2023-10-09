import Link from "next/link";

const Nav = ({setOpen}) => {

    const scrollToFooter = () => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToServices = () => {
        const footer = document.getElementById("services");

        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="">
            <div className="hover:[&>*]:underline flex lg:mx-[4.79vw] lg:py-[4px] lg:justify-between flex-col lg:flex-row text-[20px] lg:text-[16px] space-y-[40px] lg:space-y-[0] max-lg:w-[fit-content]">
                <Link
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        if (window.location.pathname === "/") {
                            scrollToServices();
                            setOpen(false);
                        } else {
                            window.location.href = "/#services";
                        }
                    }}
                >
                    Послуги
                </Link>
                <Link href="/portfolio">Портфоліо</Link>
                <Link
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToFooter();
                        setOpen(false);
                    }}
                >
                    Контакти
                </Link>
            </div>
        </section>
    );
};

export default Nav;
