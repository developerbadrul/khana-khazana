import Image from "next/image";

const Hero = () => {
    return (
        <section className="container">
            <div className="py-4 bg-cover bg-center rounded-lg p-4 md:p-12 min-h-[450px] grid place-items-center grid-cols-12">
                <div className="col-span-12 md:col-span-6 relative">
                    <Image
                        src="https://i.ibb.co/fFpnb5N/cover.png"
                        alt="Cover Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                    <h1 className="font-bold text-3xl md:text-5xl text-white">
                        Choose from thousands of recipes
                    </h1>
                    <p className="text-white my-4">Appropriately integrate technically sound value with scalable infomediaries negotiate sustainable strategic theme areas</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
