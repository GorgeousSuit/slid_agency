import Article1 from "@components/Case/Article1";
import Header from "@components/Case/Header";
import KeyPoints from "@components/Case/KeyPoints";

const page = (props) => {
    return (
        <section>
            <Header
                mainCover={"/assets/images/laser-time-cover.jpg"}
                mainTitle={"Laser Time"}
            />
            <KeyPoints
                key1="Laser Time"
                key2="Візуальна ідентичність + Комунікаційна стратегія"
                key3="США"
                key4="2023"
            />
            <Article1 />
        </section>
    );
};

export default page;
