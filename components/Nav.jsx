import Link from "next/link";

const Nav = () => {
    return (
        <section className="">
            <div className="hover:[&>*]:underline flex lg:mx-[4.79vw] lg:py-[4px] lg:justify-between flex-col lg:flex-row text-[20px] lg:text-[16px] space-y-[48px] lg:space-y-[0] max-lg:w-[fit-content]">
                <Link href="/services">Послуги</Link>
                <Link href="/portfolio">Портфоліо</Link>
                <Link href="/contacts">Контакти</Link>
            </div>
        </section>
    );
};

export default Nav;
