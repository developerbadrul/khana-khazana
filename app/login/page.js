"use client"

import { performLogin } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const LoginPage = () => {
    const [error, setError] = useState("")

    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            console.log("in client" ,formData);
            const found = await performLogin(formData)

            if (found) {
                router.push('/');
            } else {
                setError('Please provide a valid login credential');
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <section className="h-screen grid place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <div className="my-2 text-red-500">
                    {error}
                </div>
                <h4 className="font-bold text-2xl">Sign in</h4>
                <form className="login-form" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Login</button>
                </form>

                <p className="text-center text-xs text-gray-600">Or</p>

                <Link href="/register" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                    Create New Account
                </Link>
            </div>
        </section>
    );
};

export default LoginPage;