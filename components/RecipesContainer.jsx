import Image from "next/image";
import SideBar from "./SideBar";
import RecipesSection from "./RecipesSection";
import { getAllRecipes } from "@/dbConnect/queries";

const RecipesContainer = async () => {
    const recipes = await getAllRecipes()
    // console.log(recipes);
    return (
        <section className="container py-8">
            <div className="grid grid-cols-12 py-4">
                <SideBar  recipes={recipes}/>
                <RecipesSection recipes={recipes} />
            </div>
        </section>
    );
};

export default RecipesContainer;