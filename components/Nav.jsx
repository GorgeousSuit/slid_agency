import Link from 'next/link';

const Nav = () => {
    return (
        <section>
            <div className="hover:[&>*]:underline w-[calc(100%-144px)] flex mx-[72px] py-[4px] justify-between absolute bottom-[100px] left-[0px] ">
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contacts">Contacts</Link>
            </div>
        </section>
    );
};

export default Nav;
