import React from 'react';
import foodStockPhoto from '/assets/images/foodStockPhoto.jpg';
import kenPFP from '/assets/images/fatTiger.jpeg';

const Signup = ({ className, ...props }) => {
  return (
    <div className='flex min-h-[95.5vh]'>
      {/* Left Side - Branding (hidden on md and smaller) */}
      <div
        className='hidden md:flex flex-1 bg-gray-100 text-black flex-col justify-between p-10 relative'
        style={{
          backgroundImage: `url(${foodStockPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Spacer to push content to the bottom */}
        <div className='flex-grow'></div>

        {/* Blockquote and photo credit */}
        <div className='flex flex-col'>
          <blockquote className='italic text-left font-medium'>
            <p className='text-2xl pb-4'>
              “This tool has made it incredibly easy for me to track my BMI and
              follow meal plans tailored to my personal goals.”
            </p>
            <div className='not-italic flex flex-row items-center p-4 pl-0 rounded-lg gap-4'>
              <img
                src={kenPFP}
                alt='Profile'
                className='rounded-full w-12 h-12'
              />
              <div className='text-start'>
                <h2 className='text-xl font-bold'>Ken Yu</h2>
                <p className='text-gray-600'>Fitness enthusiasts</p>
              </div>
            </div>
          </blockquote>
          <p className='mt-4 text-sm text-gray-500'>
            Photo by{' '}
            <a href='https://unsplash.com/@olenkasergienko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
              <u className='underline-offset-1'>Olena Bohovyk</u>
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/photos/strawberries-in-white-ceramic-bowl-1ROcVsA8UYA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
              Unsplash
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Sign In Form (full width on md and smaller) */}
      <div className='flex-1 bg-white text-black flex flex-col justify-center items-center p-10 shadow-lg w-full md:w-auto'>
        <div className='max-w-md w-full space-y-6'>
          <h2 className='text-3xl font-bold text-center'>Create an account</h2>
          <p className='text-sm text-gray-500 text-center'>
            Enter your email below to create your account
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
                placeholder='name@example.com'
                className='w-full p-3 bg-gray-100 text-black rounded-md border border-gray-300'
              />
            </div>

            <button className='w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
              Sign In with Email
            </button>
          </form>

          {/* Divider */}
          <div className='relative my-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          {/* Google Sign-in Button */}
          <button className='w-full py-3 bg-gray-100 text-black border border-gray-300 rounded-md hover:bg-gray-200'>
            <span className='mr-2'>🔍</span> Sign in with Google
          </button>

          {/* Terms of Service */}
          <p className='text-xs text-gray-500 text-center'>
            By clicking continue, you agree to our{' '}
            <a href='#' className='underline'>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href='#' className='underline'>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
