import { filterCategory } from "@/actions";
import Image from "next/image";
import Link from "next/link";

const CategorizedPage = async ({ params: { categoryName } }) => {
    // console.log(categoryName);
    const decodedCategoryName = decodeURIComponent(categoryName);
    // console.log("in category component",decodedCategoryName);
    const category = await filterCategory(decodedCategoryName);
    // console.log("in category component category", category);
    return (
        <section className="container py-8">
            <div>
                <h3 className="font-semibold text-xl">{decodedCategoryName}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                    {category && category.map((item, index) => (
                        <Link href={`/recipe/${item._id}`} key={index}>
                            <div className="card" >
                                <Image width={800} height={600} src={item.thumbnail} className="rounded-md" alt={item.name} />
                                <div className="px-4 py-2">
                                    <h4 className="my-2">{item.name}</h4>
                                    <p className="text-gray-500">{item.description}</p>
                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                        <span>⭐️ {item.rating}</span>
                                        <span>{item.activeTime} Active / {item.totalTime} Total</span>
                                        <span>Serves: {item.serves}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorizedPage;
