import Image from "next/image";
import Logo from "@/public/assets/images/logo.png"
import Link from "next/link";
import LoginInOut from "./LoginInOut";
const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image src={Logo} alt="Logo" width={120} height={40} />
                </Link>

                <ul className="flex gap-4 text-sm text-gray-500">
                    <li className="py-2 active">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="py-2">
                        <Link href="/recipe">Recipe</Link>
                    </li>

                    <li className="py-2">
                        <a href="./index.html">About us</a>
                    </li>

                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                        <LoginInOut />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;