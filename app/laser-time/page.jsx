import Header from "@components/Case/Header";

const mainCover = "/assets/images/laser-time-cover.jpg";
const mainTitle = "Laser Time";

const page = (props) => {
    return (
        <section>
            <Header
                mainCover={"/assets/images/laser-time-cover.jpg"}
                mainTitle={"Laser Time"}
            />
        </section>
    );
};

export default page;
