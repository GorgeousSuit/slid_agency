import Link from "next/link";
import Image from "next/image";

const OtherWorks = (props) => {
    return (
        <section className="font-normal">
            <h1 className="text-[32px] lg:text-[56px] leading-[120%] mb-[40px] lg:mb-[64px] mx-[32px] lg:mx-[92px] mt-[96px] lg:mt-[160px]">Інші роботи</h1>
            <div className="flex flex-col lg:flex-row">
				<Link href={props.href1}>
								<Image
									src={props.src1}
									alt="Image"
									width={960}
									height={538}
									className=""
								/>
							</Link>
							<Link href={props.href2}>
								<Image
									src={props.src2}
									alt="Image"
									width={960}
									height={538}
									className=""
								/>
							</Link>
			</div>
        </section>
    );
};

export default OtherWorks;
