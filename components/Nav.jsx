import Link from 'next/link';

const Nav = () => {
    return (
        <section className="">
            <div className="hover:[&>*]:underline flex sm:mx-[3.75vw] sm:py-[4px] sm:justify-between flex-col sm:flex-row text-[20px] sm:text-[16px] space-y-[48px] sm:space-y-[0] max-sm:w-[fit-content]">
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contacts">Contacts</Link>
            </div>
        </section>
    );
};

export default Nav;
