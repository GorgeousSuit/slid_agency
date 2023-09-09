import Image from 'next/image';
import Header from '@components/Header';
import Fixel from 'next/font/local';
import Showreel from '@components/Showreel';
import Featured from '@components/Featured/Featured';
import Surpass from '@components/Surpass';

const fixelFont = Fixel({ src: '../fonts/FixelDisplay-Medium.ttf' });

const Home = () => {
    return (
        <section className="">
            <Header />
            <Showreel />
            <Featured />
            <Surpass />
        </section>
    );
};

export default Home;
