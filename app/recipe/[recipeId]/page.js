import RecipeInfo from "@/components/RecipeInfo";
import RecipeMakeDetails from "@/components/RecipeMakeDetails";
import { selectedRecipe } from "@/dbConnect/queries";

async function RecipeDetailsPage({ params: { recipeId } }) {
    try {
        const recipe = await selectedRecipe(recipeId);
        // console.log(recipe);
        return (
            <div>
                <RecipeInfo recipe={recipe} />
                <RecipeMakeDetails recipe={recipe} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching recipe:", error.message);
        return <div>Error fetching recipe</div>;
    }
}

export default RecipeDetailsPage;
