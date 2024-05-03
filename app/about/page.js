import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">About Khana Khazana</h2>
            <p className="mb-4">
                Khana Khazana is a culinary destination where food lovers can discover delicious recipes from around the world. Whether youre a seasoned chef or a novice in the kitchen, our platform offers a wide range of recipes to suit every taste and skill level.
            </p>
            <p className="mb-4">
                At Khana Khazana, we believe that cooking should be a fun and rewarding experience. Thats why we provide step-by-step instructions, helpful tips, and mouthwatering photos to guide you through each recipe. Whether youre craving comfort food, exploring new flavors, or hosting a dinner party, Khana Khazana has you covered.
            </p>
            <p className="mb-4">
                In addition to our collection of recipes, Khana Khazana also offers the convenience of online ordering for select recipe items. Simply browse our menu, place your order, and have the ingredients delivered right to your doorstep. Its never been easier to enjoy delicious homemade meals without the hassle of grocery shopping.
            </p>
            <div className="text-center">
                <Link href="/recipe" className="text-blue-500 hover:underline">
                    Explore Our Recipes
                </Link>
               
            </div>
        </div>
    );
};

export default AboutPage;
