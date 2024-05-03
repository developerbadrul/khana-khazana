import { recipesModel } from "@/models/recipes-model"
import { userModel } from "@/models/user-model"
import connectMongo from "./connectMongoose";


async function getAllRecipes() {
    await connectMongo()
    try {
        const recipes = await recipesModel.find();
        return recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error.message);
        throw new Error("Failed to fetch recipes");
    }
}


async function selectedRecipe(recipeId) {
    await connectMongo()
    try {
        const recipe = await recipesModel.findById(recipeId);
        return recipe;
    } catch (error) {
        console.error("Error finding recipe:", error.message);
        throw new Error("Failed to fetch recipe");
    }
}



async function createUser(user) {
    await connectMongo()
    try {
        const newUser = await userModel.create(user);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw new Error("Failed to create user");
    }
}


async function findUserByCredentials(credentials) {
    await connectMongo()
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return user;
    }
    return null;
}

async function findCategoryByName(category) {
    await connectMongo()
    try {
        const result = await recipesModel.find({ category: category });
        console.log("in query", category);
        return result;
    } catch (error) {
        throw error.message
    }
}


export { createUser, getAllRecipes, selectedRecipe, findUserByCredentials, findCategoryByName }