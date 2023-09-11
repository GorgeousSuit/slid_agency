import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

Image;

const Header = () => {
    return (
        <section className="bg-black w-screen h-[78vh] text-white relative">
            <div className="flex justify-between mx-[72px]">
                <Image
                    src="/assets/images/logo-lg.svg"
                    alt="Logo-lg"
                    width={330}
                    height={195}
                    className="pt-[64px]"
                />
                <div className="flex-column pt-[40px]">
                    <div className="flex gap-4 py-1 mb-[35px]">
                        <Link href="/EN">Eng</Link>
                        <Link href="/UA">Ua</Link>
                    </div>
                    <div className="flex items-center mb-[37px] gap-[66px]">
                        <p className="text-[24px] leading-[26.4px]">
                            +38 067 275 74 24
                        </p>
                        <button className="border-white border-[1px] rounded-[100px] px-[24px] py-[12px] leading-[17.6px] btn">
                            Get in touch
                        </button>
                    </div>
                    <p className="block text-2xl ">
                        We create the best design solutions <br /> for your
                        product in digital
                    </p>
                </div>
            </div>
            <Nav />
        </section>
    );
};

export default Header;
