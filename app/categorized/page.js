import Image from "next/image";

const categorizedPage = () => {
    return (
        <section className="container py-8">
            <div>

                <h3 className="font-semibold text-xl">Appetizers & Snacks</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                    <div className="card">
                        <Image width={300} height={300} src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt="" />
                            <h4 className="my-2">Chef Jons Turkey Sloppy Joes</h4>
                            <div className="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div className="card">
                        <Image width={300} height={300} src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt="" />
                            <h4 className="my-2">Chef Jons Turkey Sloppy Joes</h4>
                            <div className="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div className="card">
                        <Image width={300} height={300} src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt="" />
                            <h4 className="my-2">Chef Jons Turkey Sloppy Joes</h4>
                            <div className="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div className="card">
                        <Image width={300} height={300} src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt="" />
                            <h4 className="my-2">Chef Jons Turkey Sloppy Joes</h4>
                            <div className="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div className="card">
                        <Image width={300} height={300} src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt="" />
                            <h4 className="my-2">Chef Jons Turkey Sloppy Joes</h4>
                            <div className="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default categorizedPage;