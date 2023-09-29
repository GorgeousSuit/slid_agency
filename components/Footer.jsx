import Image from "next/image";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-black text-white px-[32px] sm:px-[5vw] 2xl:px-[92px] pt-[64px] sm:pt-[26px] pb-[32px] sm:pb-[59px] max-sm:space-y-[64px]"
        >
            <h1 className="text-[36px] sm:text-[72px] font-normal leading-[43.2px] sm:leading-[86.4px] ">
                Зв'яжіться з нами
            </h1>
            <div className="flex flex-col sm:flex-row-reverse justify-between sm:mt-[120px]">
                <div className="sm:mr-[110px] w-full sm:w-[32.5vw] 2xl:w-[38.33vw] max-sm:mb-[64px]">
                    <form
                        action="#"
                        method="post"
                        className="flex flex-col space-y-[48px] sm:space-y-[64px] 2xl:mr-[100px]"
                    >
                        <input
                            type="text"
                            className="focus:border-[#ADADAD]"
                            placeholder="Ім'я"
                        />
                        <input
                            type="tel"
                            className="focus:border-[#ADADAD]"
                            placeholder="Телефон"
                        />
                        <input
                            type="email"
                            className="focus:border-[#ADADAD]"
                            placeholder="Електронна пошта"
                        />
                        <input
                            type="text"
                            className="focus:border-[#ADADAD]"
                            placeholder="Коментар"
                        />
                        <button
                            type="submit"
                            className="w-[177px] pt-[12px] pb-[12px] px-[24px] font-normal leading-[17.6px] border border-white rounded-[100px] btn"
                        >
                            Зв'язатись
                        </button>
                    </form>
                </div>
                <div className="">
                    <div className="flex flex-col-reverse sm:flex-col">
                        <div className="flex justify-between leading-[17.6px] sm:max-lg:pr-[20px] mb-[64px] sm:mb-[85px] hover:[&>*]:underline">
                            <a href="/" className="">
                                Instagram
                            </a>
                            <a href="/" className="">
                                Facebook
                            </a>
                            <a href="/" className="">
                                Behance
                            </a>
                        </div>
                        <div className="font-normal space-y-[16px] mb-[64px] sm:mb-[121px]">
                            <p className="">
                                вул. Січових Стрільців, 10, Київ, Україна
                            </p>
                            <p className="leading-[17.6px]">
                                +38 067 275 74 24
                            </p>
                            <p className="leading-[17.6px]">
                                welcome@slid.agency
                            </p>
                        </div>
                    </div>
                    <a href="/" className="hidden underline hover:no-underline">
                        Наша презентація
                    </a>
                </div>
            </div>
            <div className="flex sm:justify-end mb-[32px] mt-[128px]">
                <Image
                    src="/assets/images/logo-footer-lg.svg"
                    alt="footer-logo-lg"
                    width={98}
                    height={58}
                />
            </div>
            <div className="text-[#545454] flex flex-col sm:flex-row justify-between max-sm:space-y-[16px]">
                <p className="">Privacy policy</p>
                <p className="">Copyright © 2023 All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
