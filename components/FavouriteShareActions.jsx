"use client"
import { addFavouriteItem } from "@/actions";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const FavouriteShareActions = ({ recipeId }) => {
    const { auth } = useAuth();
    const router = useRouter();
    const isInterested = auth?.favourites?.includes(recipeId);
    const [interested, setInterested] = useState(isInterested);
    const [isPending, startTransition] = useTransition();
    const toggleFavourite = async () => {
        if (auth) {
            addFavouriteItem(recipeId, auth._id);
            setInterested(!interested);
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="flex gap-4 justify-end">

            {
                isPending ? "Please Wait" : (<button
                    onClick={() => startTransition(() => toggleFavourite())}
                    className="flex gap-2 items-center text-gray-600 cursor-pointer hover:text-red-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <span>{interested ? "Already Favourite" : "Add Favourite"}</span>
                </button>)
            }


            <div className="flex gap-2 items-center text-gray-600 cursor-pointer hover:text-blue-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>Share</span>
            </div>
        </div>
    );
};

export default FavouriteShareActions;
