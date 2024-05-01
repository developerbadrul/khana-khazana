import { recipesModel } from "@/models/recipes-model"
import { userModel } from "@/models/user-model"


const getAllRecipes = async () => {
    return await recipesModel.find()
}

const createUser = async user => {
    return await userModel.create(user)
}


export { createUser, getAllRecipes }