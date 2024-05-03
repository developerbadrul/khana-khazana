"use client"
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import Link from "next/link";
import LoginInOut from "./LoginInOut";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const isActiveLink = (href) => {
        return router.pathname === href ? "active" : "";
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container flex justify-between items-center py-4">
                <Link href="/">
                        <Image src={Logo} alt="Logo" width={120} height={40} />
                </Link>
                <ul className="flex gap-4 text-sm">
                    <li className={`py-2 ${isActiveLink("/")}`}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={`py-2 ${isActiveLink("/recipe")}`}>
                        <Link href="/recipe">
                            Recipe
                        </Link>
                    </li>
                    <li className={`py-2 ${isActiveLink("/about-us")}`}>
                        <Link href="/about">
                            About us
                        </Link>
                    </li>

                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white">
                        <LoginInOut />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
