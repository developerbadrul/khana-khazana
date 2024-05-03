import Link from "next/link";

const SideBar = ({ recipes }) => {
    // Extract unique categories
    const uniqueCategories = [...new Set(recipes.map(c => c.category))];
    return (
        <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                {uniqueCategories && uniqueCategories.map((c, idx) => (
                    <li key={idx}>
                        <Link href={`/categorized/${c}`}>{c}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
