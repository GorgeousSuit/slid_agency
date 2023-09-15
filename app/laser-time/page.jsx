import Header from "@components/Case/Header";

const mainCover = "/assets/images/laser-time-cover.jpg";
const mainTitle = "Laser Time";

const page = (props) => {
    return (
        <section>
            <Header mainCover={mainCover} mainTitle={mainTitle} />
        </section>
    );
};

export default page;
