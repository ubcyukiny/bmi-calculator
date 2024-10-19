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
        <div className="flex flex-col md:flex-row w-full items-center mb-6">
          <div className="mb-3 md:mb-0 md:mr-4">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            ) : (
              <img
                src={userStockPic}
                alt="Profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-medium text-xl mb-2">
              {user.displayName || "Ken"}
            </h2>
            <h4 className="text-sm mb-4 font-light">@{user.email}</h4>
            <p className="text-gray-500 italic text-sm">
              I’m a mysterious individual who has yet to fill out my bio. One
              thing’s for certain: I love food!
            </p>
          </div>
        </div>
        <h2 className="m-6 font-bold">Favourite recipes</h2>
        <div className="mb-10 w-full flex flex-col items-center gap-10 col-g sm:grid-flow-dense sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
