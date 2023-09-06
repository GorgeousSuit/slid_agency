import Image from "next/image";
import AnimationComponent from "../components/AnimationComponent";
import Fixel from "next/font/local";

const fixelFont = Fixel({ src: "../fonts/FixelDisplay-Medium.ttf" });

const Home = () => {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <AnimationComponent />
      </div>

      <div className="flex flex-col justify-between w-screen h-screen">
        <div className="text-[16px] lg:flex justify-between z-10 pt-[64px] pl-[60px] pr-[38px]">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={363.85}
            height={215}
            className="object-contain hidden lg:block"
          />
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={153}
            height={91}
            className="object-contain lg:hidden"
          />
          <p
            style={fixelFont.style}
            className="text-white leading-[22.4px] mt-[32px] lg:mt-0 lg:ml-[15px]"
          >
            Сайт знаходиться у розробці, але ви вже зараз{" "}
            <br className="hidden lg:block" /> можете{" "}
            <a href="" className="underline">
              завантажити нашу презентацію
            </a>
          </p>
        </div>
        <div
          style={fixelFont.style}
          className="pb-[32px] lg:p-0 lg:flex items-center justify-between text-white"
        >
          <div className="pl-[32px] lg:px-[72px] pb-[32px] lg:pb-[53px]">
            <p className="text-20px lg:text-[24px] leading-[33.6px]">
              Зв’яжіться з нами
            </p>
            <p className="text-[32px] lg:text-[40px] leading-[44px]">
              +38 067 275 74 24
            </p>
          </div>
          <p className="ml-[32px] text-[20px] lg:text-[24px] mr-[72px]">
            welcome@slid.agency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
