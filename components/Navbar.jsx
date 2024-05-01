import Image from "next/image";
import Logo from "@/public/assets/images/logo.png"
import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
            <div class="container flex justify-between py-6">
                <Link href="/">
                    <Image src={Logo} alt="Logo"  width={120} height={40}/>
                </Link>

                <ul class="flex gap-4 text-sm text-gray-500">
                    <li class="py-2 active">
                        <Link href="/">Home</Link>
                    </li>

                    <li class="py-2">
                        <Link href="/recipe">Recipe</Link>
                    </li>

                    <li class="py-2">
                        <a href="./index.html">About us</a>
                    </li>

                    <li class="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;