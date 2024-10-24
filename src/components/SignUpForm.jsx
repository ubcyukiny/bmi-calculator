import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import eye from "/assets/images/eye.svg";
import eyeSlash from "/assets/images/eye-slash.svg";
import googleIcon from "/assets/images/icons8-google.svg";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    checkFormValidity();
  }, [strength, email]);

  const handleSignUpWithGoogle = async () => {
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

  const handleSignUpWithEmail = async (e) => {
    e.preventDefault();
    setSignUpLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log("User signed in with Email: ", user);

      // Add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });

      navigate("/myProfile");
    } catch (error) {
      console.error("Error during sign-in: ", error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validatePassword = (password) => {
    let strength = 0;
    const criteria = {
      length: password.length >= 6,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    strength = Object.values(criteria).reduce(
      (acc, curr) => acc + (curr ? 1 : 0),
      0,
    );
    setStrength(strength);
    return criteria;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const isEmailValid =
    email !== "" && document.getElementById("email")?.checkValidity();

  const getStrengthMessage = () => {
    switch (strength) {
      case 0:
        return "Very Weak";
      case 1:
        return "Very Weak";
      case 2:
        return "Fair";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  const getBarColor = (strength) => {
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-orange-400";
    if (strength === 3) return "bg-yellow-400";
    if (strength === 4) return "bg-green-400";
    return "bg-gray-200";
  };

  const checkFormValidity = (e) => {
    if (isEmailValid && strength === 4) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="flex-1 bg-white text-black flex flex-col justify-center items-center p-10 shadow-lg w-full md:w-auto">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center">Create an account</h2>
        <p className="text-sm text-gray-500 text-center">
          Enter your email below to create your account
        </p>

        <form className="space-y-4" method="post">
          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              onInput={handleEmailChange}
              onBlur={handleEmailBlur}
              autoComplete="email"
              className={`w-full p-3 bg-gray-100 text-black rounded-md border border-gray-300
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                ${!isEmailValid && emailTouched ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
            />
          </div>
          {emailTouched && !email && (
            <div className=" text-red-500">This field is required.</div>
          )}

          {emailTouched && email && !isEmailValid && (
            <div className=" text-red-500">Enter a valid email address.</div>
          )}

          {/* Password Input  */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Password"
              className="w-full p-3 bg-gray-100 text-black rounded-md border border-gray-300
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              required
              onChange={handlePasswordChange}
              onFocus={() => {
                setIsPasswordFocused(true);
              }}
              onBlur={() => {
                setIsPasswordFocused(false);
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

          {/* only renders when password label is focused */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out transform ${isPasswordFocused || password != "" ? "opacity-100  max-h-48 visible" : "opacity-0 max-h-0 max-h-0 invisible"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span>Password strength</span>
              <span>{getStrengthMessage()}</span>
            </div>

            {/* Password strength bars */}
            <div className="flex justify-between space-x-1 mb-4">
              <div
                className={`transition duration-300 ease-in-out h-2 flex-1 rounded-full ${strength >= 1 ? getBarColor(strength) : "bg-gray-200"}`}
              />
              <div
                className={`transition duration-300 ease-in-out h-2 flex-1 rounded-full ${strength >= 2 ? getBarColor(strength) : "bg-gray-200"}`}
              />
              <div
                className={`transition duration-300 ease-in-out h-2 flex-1 rounded-full ${strength >= 3 ? getBarColor(strength) : "bg-gray-200"}`}
              />
              <div
                className={`transition duration-300 ease-in-out h-2 flex-1 rounded-full ${strength >= 4 ? getBarColor(strength) : "bg-gray-200"}`}
              />
            </div>

            {/* Password criteria */}
            <ul className="text-sm">
              <li
                className={`mb-1 ${password.length >= 6 ? "text-green-500" : "text-gray-500"}`}
              >
                {password.length >= 6 ? "✓" : "✗"} At least 6 characters
              </li>
              <li
                className={`mb-1 ${/[A-Z]/.test(password) ? "text-green-500" : "text-gray-500"}`}
              >
                {/[A-Z]/.test(password) ? "✓" : "✗"} Contains uppercase letter
              </li>
              <li
                className={`mb-1 ${/[a-z]/.test(password) ? "text-green-500" : "text-gray-500"}`}
              >
                {/[a-z]/.test(password) ? "✓" : "✗"} Contains lowercase letter
              </li>
              <li
                className={`mb-1 ${/\d/.test(password) ? "text-green-500" : "text-gray-500"}`}
              >
                {/\d/.test(password) ? "✓" : "✗"} Contains a number
              </li>
              <li
                className={`mb-1 ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-green-500" : "text-gray-500"}`}
              >
                {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "✓" : "✗"} Contains
                special character
              </li>
            </ul>
          </div>

          {signUpLoading ? (
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
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              className={`flex items-center justify-center w-full py-2.5 px-4 bg-sky-500 text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${!isFormValid ? "opacity-50" : "hover:bg-sky-600"}`}
              disabled={!isFormValid}
              onClick={handleSignUpWithEmail}
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
          onClick={handleSignUpWithGoogle}
        >
          <img src={googleIcon} alt="Google Icon" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

        {/* Terms of Service */}
        <p className="text-xs text-gray-500 text-center">
          By clicking continue, you agree to our{" "}
          <a
            href="/bmi-calculator/TermsOfService"
            target="_blank"
            className="underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/bmi-calculator/PrivacyPolicy"
            target="_blank"
            className="underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
