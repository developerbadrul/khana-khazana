"use server"

import { createUser, findCategoryByName, findUserByCredentials, updateFavouriteRecipe } from "@/dbConnect/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const registerUser = async formData => {
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const password = formData.get("password")
    const user = { firstName, lastName, email, password }
    try {
        // const user = Object.fromEntries(formData);
        const created = await createUser(user);
        redirect("/login")

    } catch (error) {
        throw error;
    }
};


export async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email")
        credential.password = formData.get("password")
        // console.log("in server action", credential);
        const found = await findUserByCredentials(credential)
        return found
    } catch (error) {
        throw error;
    }
}


export async function filterCategory(category) {
    const filtered = await findCategoryByName(category)
    console.log("in action", category);
    return filtered;
}


export async function addFavouriteItem(recipeId, authId) {
    console.log("in action", recipeId, authId);
    try {
        await updateFavouriteRecipe(recipeId, authId)
    } catch (error) {
        throw error;
    }

    revalidatePath(`/recipe/${recipeId}`);
}