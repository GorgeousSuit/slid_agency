import Image from 'next/image';
import Header from '@components/Header';
import Fixel from 'next/font/local';
import Showreel from '@components/Showreel';
import Advantages from '@components/Advantages';
import Featured from '@components/Featured/Featured';
import Surpass from '@components/Surpass';
import Services from '@components/OurServices/Services';
import AnimationComponent from '@components/AnimationComponent';

const fixelFont = Fixel({ src: '../fonts/FixelDisplay-Medium.ttf' });

const Home = () => {
    return (
        <section className="">
            <Header />
            <Showreel />
            <Advantages />
            <Featured />
            <Surpass />
            <Services />
            <AnimationComponent />
        </section>
    );
};

export default Home;
