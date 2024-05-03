import Image from "next/image";
import Link from "next/link";

const RecipesSection = ({ recipes }) => {
    return (
        <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                {
                    recipes && recipes.map(recipe => (
                        <Link href={`/recipe/${recipe._id}`} key={recipe._id}>
                            <div className="card">
                                <div className="relative w-[300px] h-[200px]">
                                    <Image src={recipe.thumbnail} layout="fill" className="rounded-md" alt="" />
                                </div>
                                <h4 className="my-2">{recipe.name}</h4>
                                <div className="py-2 flex justify-between text-xs text-gray-500">
                                    <span>⭐️ {recipe.rating}</span>
                                    <span>By: {recipe.author}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default RecipesSection;
