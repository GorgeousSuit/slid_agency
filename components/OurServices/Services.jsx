import ServicesItem from './ServicesItem';

const servicesData = [
    {
        number: '01',
        title: 'Branding',
        content: 'Placeholder text. Wow! So informative!'
    },
    {
        number: '02',
        title: 'Identity',
        content: 'Placeholder text. Wow! So informative!'
    },
    {
        number: '03',
        title: 'Website design',
        content: 'Placeholder text. Wow! So informative!'
    },
    {
        number: '04',
        title: 'Creative',
        content: 'Placeholder text. Wow! So informative!'
    },
    {
        number: '05',
        title: 'Web & Mobile application',
        content: 'Placeholder text. Wow! So informative!'
    },
    {
        number: '06',
        title: 'UX & Product design',
        content: 'Placeholder text. Wow! So informative!'
    },
    {
        number: '07',
        title: 'Graphic design',
        content: 'Placeholder text. Wow! So informative!'
    },
    {
        number: '08',
        title: 'Social Media Design',
        content: 'Placeholder text. Wow! So informative!'
    }
];

const Services = (props) => {
    return (
        <section className="mx-[72px] mb-[128px]">
            <div className="">
                <h1 className="text-[56px] leading-[67.2px] font-normal mb-[108px]">
                    Our Services
                </h1>
                <div className="mt-[175px] flex flex-col items-end">
                    {servicesData.map((servicesData, index) => (
                        <ServicesItem
                            key={index}
                            number={servicesData.number}
                            title={servicesData.title}
                            content={servicesData.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
