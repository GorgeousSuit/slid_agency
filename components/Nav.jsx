import Link from 'next/link';

const Nav = () => {
    return (
        <section>
            <div className="hover:[&>*]:underline w-[calc(100%-7.5vw)] flex mx-[3.75vw] py-[4px] justify-between absolute bottom-[100px] ">
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contacts">Contacts</Link>
            </div>
        </section>
    );
};

export default Nav;
