import { registerUser } from "@/actions";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <section class="h-screen grid place-items-center">
            <div class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 class="font-bold text-2xl">Sign Up</h4>
                <form class="login-form" action={registerUser}>
                    <div>
                        <label for="fname">First Name</label>
                        <input type="text" name="firstName" id="fname" />
                    </div>

                    <div>
                        <label for="lname">Last Name</label>
                        <input type="text" name="lastName" id="lname" />
                    </div>
                    <div>
                        <label for="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <button type="submit" class="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Create Account</button>
                </form>

                <p class="text-center text-xs text-gray-600">Or</p>

                <Link href="/login" class="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                    Login
                </Link>

            </div>
        </section>
    );
};

export default RegisterPage;