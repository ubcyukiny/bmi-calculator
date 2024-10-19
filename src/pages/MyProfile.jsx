import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import userStockPic from "/assets/images/user.svg";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/RecipeData";

const MyProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div>
      <section className="flex flex-col justify-center items-center p-6 ">
        <div className="mb-3">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              style={{ width: "100px", borderRadius: "50%" }}
            />
          ) : (
            <img
              src={userStockPic}
              alt="Profile"
              style={{ width: "100px", borderRadius: "50%" }}
            />
          )}
        </div>

        <h2 className="font-medium text-xl mb-2">
          {user.displayName || "Ken"}
        </h2>
        <h4 className="mb-4 font-light text-xs">@{user.email}</h4>

        <p className="text-gray-500 mb-10 italic text-xs text-center">
          I’m a mysterious individual who has yet to fill out my bio. One
          thing’s for certain: I love food!
        </p>
        <h2 className="m-6 font-bold">Favourite recipes</h2>
        <div className="mb-10 w-full flex flex-col items-center gap-10 sm:grid-flow-dense sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
