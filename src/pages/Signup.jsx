import foodStockPhoto from '/assets/images/foodStockPhoto.jpg';
import foodStockPhoto2 from '/assets/images/foodStockPhoto2.jpg';

import kenPFP from '/assets/images/fatTiger.jpeg';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

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
          <p className='mt-4 text-sm text-black'>
            Photo by{' '}
            <a href='https://unsplash.com/@olenkasergienko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
              <u className='underline-offset-1'>Olena Bohovyk</u>
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/photos/strawberries-in-white-ceramic-bowl-1ROcVsA8UYA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
              <u className='underline-offset-1'>Unsplash</u>
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Sign In Form (full width on md and smaller) */}
      <SignUpForm />
    </div>
  );
};

export default Signup;
