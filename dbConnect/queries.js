import { recipesModel } from "@/models/recipes-model"
import { userModel } from "@/models/user-model"


async function getAllRecipes() {
    try {
        const recipes = await recipesModel.find();
        return recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error.message);
        throw new Error("Failed to fetch recipes");
    }
}


async function selectedRecipe(recipeId) {
    try {
        const recipe = await recipesModel.findById(recipeId);
        return recipe;
    } catch (error) {
        console.error("Error finding recipe:", error.message);
        throw new Error("Failed to fetch recipe");
    }
}



async function createUser(user) {
    try {
        const newUser = await userModel.create(user);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw new Error("Failed to create user");
    }
}


async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return user;
    }
    return null;
}


export { createUser, getAllRecipes, selectedRecipe, findUserByCredentials }