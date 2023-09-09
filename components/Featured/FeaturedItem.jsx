import Image from 'next/image';

const FeaturedItem = (props) => {
    return (
        <div>
            <Image
                src={props.src}
                alt="Case"
                width={1920}
                height={1080}
                className=""
            />
        </div>
    );
};

export default FeaturedItem;
