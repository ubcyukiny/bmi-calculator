import React, { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/firebase";

const EditProfile = () => {
  const context = useAuth();
  const user = context.user;
  console.log(user);
  const [name, setName] = useState(user.displayName);
  const [avatar, setAvatar] = useState(user.photoURL);
  const [goals, setGoals] = useState("lose");
  const [dietaryRestrictions, setDietaryRestrictions] = useState(
    user.dietaryRestrictions || [],
  );

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 256000) {
        alert("File size must be less than 250KB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDietaryChange = (event) => {
    const { name, checked } = event.target;
    setDietaryRestrictions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // TODO
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let avatarUrl = avatar;
      if (avatar.startsWith("data:")) {
        // File is a data URL from FileReader
        const avatarRef = ref(storage, `avatars/${user.uid}`);
        const imgResponse = await fetch(avatar);
        const imgBlob = await imgResponse.blob();
        console.log(imgBlob);
        await uploadBytes(avatarRef, imgBlob);
        avatarUrl = await getDownloadURL(avatarRef);
        console.log(avatarUrl);
      }

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        photo: avatarUrl,
        goals: goals,
        dietaryRestrictions: dietaryRestrictions,
      });

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex mt-4">
          {avatar && (
            <img
              src={avatar}
              alt="Profile"
              className=" w-24 h-24 rounded-full"
            />
          )}
          <div className="p-3">
            <label className="block mb-1 text-sm font-medium text-gray-900 ml-3">
              Avatar
            </label>
            <label className="block mb-2 text-sm font-medium italic text-gray-900 ml-3">
              Image cannot be more than 250KB
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleAvatarChange}
              className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700 file:cursor-pointer
          hover:file:bg-violet-100"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            maxLength="40"
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            disabled
            className="bg-gray-200 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div>
          <label
            htmlFor="goals"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Health Goals
          </label>
          <select
            id="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="lose">Lose weight</option>
            <option value="maintain">Maintain weight</option>
            <option value="gain">Gain weight</option>
          </select>
        </div>
        <div>
          <fieldset>
            <legend className="block mb-2 text-sm font-medium text-gray-900">
              Dietary Restrictions
            </legend>
            <div className="space-y-2">
              {[
                "Gluten Free",
                "Vegan",
                "Vegetarian",
                "Dairy Free",
                "Nut Free",
              ].map((restriction) => (
                <div key={restriction}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name={restriction}
                      checked={!!dietaryRestrictions[restriction]}
                      onChange={handleDietaryChange}
                      className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">
                      {restriction}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
