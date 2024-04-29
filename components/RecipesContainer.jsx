import Image from "next/image";
import SideBar from "./SideBar";
import RecipesSection from "./RecipesSection";

const RecipesContainer = () => {
    return (
        <section className="container py-8">
            <div className="grid grid-cols-12 py-4">
                <SideBar />
                <RecipesSection />
            </div>
        </section>
    );
};

export default RecipesContainer;