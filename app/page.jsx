import Image from 'next/image';
import Header from '@components/Header';
import Fixel from 'next/font/local';

const fixelFont = Fixel({ src: '../fonts/FixelDisplay-Medium.ttf' });

const Home = () => {
    return (
        <section className="">
            <Header />
        </section>
    );
};

export default Home;
