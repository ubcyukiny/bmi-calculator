import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import userStockPic from "/assets/images/user.svg";

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

        {/* <div className="space-y-1 mb-4 flex flex-col items-start">
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined text-lg mr-2">
              monitor_weight
            </span>
            <p>Current Weight: 170lbs</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined text-lg mr-2">flag</span>
            <p>Current Goal: 160lbs</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined text-lg mr-2">
              restaurant_menu
            </span>
            <p>Current Plan: Lose 0.5lbs per week</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined text-lg mr-2">eco</span>
            <p>Dietary Restrictions: Gluten Free</p>
          </div>
        </div> */}
        <div className="bg-zinc-100 w-screen flex flex-col  items-center p-6">
          <h2>Favourite recipes</h2>
          {/* <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/> */}
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
