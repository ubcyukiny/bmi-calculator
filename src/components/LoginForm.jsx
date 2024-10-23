import React, { useState } from "react";
import googleIcon from "/assets/images/icons8-google.svg";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import eye from "/assets/images/eye.svg";
import eyeSlash from "/assets/images/eye-slash.svg";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      console.log("User signed in with Google: ", user);

      // Add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      });

      navigate("/myProfile");
    } catch (error) {
      console.error("Error during Google sign-in: ", error.message);
    }
  };

  const handleSignInWithEmail = (e) => {
    e.preventDefault();
    setLoginLoading(true);

    setTimeout(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/MyProfile");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(
            `error code: ${errorCode}, errorMessage: ${errorMessage}`,
          );
          setLoginLoading(false);
          setLoginError(true);
        });
    }, 350);
  };

  return (
    <div className="flex-1 bg-white text-black flex flex-col justify-center items-center p-10 shadow-lg w-full md:w-auto">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center">Welcome back</h2>
        <p className="text-sm text-gray-500 text-center">
          Enter your email below to login to your account
        </p>

        {/* Email Input Form */}
        <form className="space-y-4">
          <div className="space-y-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-100 text-black rounded-md border border-gray-300
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              required
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 bg-gray-100 text-black rounded-md border border-gray-300
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                required
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 focus:outline-none"
              >
                <img
                  src={showPassword ? eyeSlash : eye}
                  alt="Toggle Password Visibility"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {loginLoading ? (
            <button
              className="flex items-center justify-center w-full py-2.5 px-4 bg-sky-400 border border-gray-300 text-white rounded-md"
              disabled
            >
              <svg
                className="animate-spin h-6 w-6 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              className={`flex items-center justify-center w-full py-2.5 px-4 bg-sky-500 text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${email === "" || password === "" ? "opacity-50" : "hover:bg-sky-600"}`}
              disabled={email === "" || password === ""}
              onClick={handleSignInWithEmail}
            >
              Continue
            </button>
          )}
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        {/* Google Sign-in Button */}
        <button
          className="flex items-center justify-center w-full py-2.5 px-4 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          onClick={handleSignInWithGoogle}
        >
          <img src={googleIcon} alt="Google Icon" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

        {loginError ? (
          <div className="text-red-500 text-center">
            Sorry, your password was incorrect. Please double-check your
            password.
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
