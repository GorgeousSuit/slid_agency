import Image from "next/image";
import Header from "@components/Home/Header";
import Fixel from "next/font/local";
import Showreel from "@components/Home/Showreel";
import Advantages from "@components/Home/Advantages";
import Featured from "@components/Home/Featured/Featured";
import Surpass from "@components/Home/Surpass";
import Services from "@components/Home/OurServices/Services";
import AnimationComponent from "@components/Home/AnimationComponent";
import AnimatedHoverButton from "@components/Home/AnimatedHoverButton";

const fixelFont = Fixel({ src: "../fonts/FixelDisplay-Medium.ttf" });

const Home = () => {
    return (
        <section>
            <Header />
            <Advantages />
            <Featured />
            <Surpass />
            <Services />
            <AnimationComponent />
        </section>
    );
};

export default Home;
