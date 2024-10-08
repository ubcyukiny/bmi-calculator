import React, { useState } from 'react';
import googleIcon from '/assets/images/icons8-google.svg';
import { useNavigate } from 'react-router-dom';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import eye from '/assets/images/eye.svg';
import eyeSlash from '/assets/images/eye-slash.svg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('User signed in with Google: ', user);

        navigate('/myProfile');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error during sign-in: ', error);
      });
  };

  const handleSignUpWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/myProfile');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className='flex-1 bg-white text-black flex flex-col justify-center items-center p-10 shadow-lg w-full md:w-auto'>
      <div className='max-w-md w-full space-y-6'>
        <h2 className='text-3xl font-bold text-center'>Welcome back</h2>
        <p className='text-sm text-gray-500 text-center'>
          Enter your email below to login to your account
        </p>

        {/* Email Input Form */}
        <form className='space-y-4'>
          <div className='space-y-2'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              className='w-full p-3 bg-gray-100 text-black rounded-md border border-gray-300
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              required
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className='relative'>
              <input
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='w-full p-3 bg-gray-100 text-black rounded-md border border-gray-300
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                required
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute right-3 top-3 focus:outline-none'
              >
                <img
                  src={showPassword ? eyeSlash : eye}
                  alt='Toggle Password Visibility'
                  className='w-6 h-6'
                />
              </button>
            </div>
          </div>

          <button
            className='flex items-center justify-center w-full py-2.5 px-4 bg-sky-500 text-white border border-gray-300 rounded-md hover:bg-sky-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
            onClick={handleSignUpWithEmail}
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className='relative my-6'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='bg-white px-2 text-gray-500'>OR</span>
          </div>
        </div>

        {/* Google Sign-in Button */}
        <button
          className='flex items-center justify-center w-full py-2.5 px-4 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
          onClick={handleSignInWithGoogle}
        >
          <img src={googleIcon} alt='Google Icon' className='w-5 h-5 mr-2' />
          Continue with Google
        </button>

        {/* Terms of Service */}
        <p className='text-xs text-gray-500 text-center'>
          By clicking continue, you agree to our{' '}
          <a
            href='/bmi-calculator/TermsOfService'
            target='_blank'
            className='underline'
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href='/bmi-calculator/PrivacyPolicy'
            target='_blank'
            className='underline'
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
