"use client"
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginInOut = () => {
    const { auth, setAuth } = useAuth()

    const router = useRouter()

    function logOut() {
        setAuth(null)
        router.push("/login")
    }

    return (
        <div>
            {
                auth ? (
                    <div>
                        <span className="mr-2">{`${auth.firstName} ${auth.lastName}`}</span>
                        <span className="mr-1">|</span>
                        <span className="cursor-pointer" onClick={logOut}>LogOut</span>
                    </div>
                ) : (<Link href="/login">Login</Link>)
            }
        </div >
    );
};

export default LoginInOut;