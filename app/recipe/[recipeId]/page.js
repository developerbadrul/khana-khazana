import RecipeInfo from "@/components/RecipeInfo";
import RecipeMakeDetails from "@/components/RecipeMakeDetails";

const RecipeDetailsPage = ({ params: { recipeId } }) => {
    return (
        <div>
            <RecipeInfo />
            <RecipeMakeDetails />
        </div>
    );
};

export default RecipeDetailsPage;