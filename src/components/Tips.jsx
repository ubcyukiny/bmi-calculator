import eatingIcon from '/assets/images/icon-eating.svg';
import exerciseIcon from '/assets/images/icon-exercise.svg';
import sleepIcon from '/assets/images/icon-sleep.svg';

const Tips = () => {
  return (
    <section className='flex flex-col py-14 pr-7 px-5 gap-10 bg-gradient-to-r from-[rgba(214,252,254,0)] to-[rgba(214,230,254,100)] h-auto'>
      <div>
        <img src={eatingIcon} alt='' className='size-16 mb-8' />
        <h2 className='text-gunmetal text-[1.5rem] mb-6 font-semibold tracking-tighter'>
          Healthy eating
        </h2>
        <p className='text-darkElectricBlue text-base font-normal'>
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </p>
      </div>
      <div>
        <img src={exerciseIcon} alt='' className='size-16 mb-8' />
        <h2 className='text-gunmetal text-[1.5rem] mb-6 font-semibold tracking-tighter'>
          Regular exercise
        </h2>
        <p className='text-darkElectricBlue text-base font-normal'>
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </p>
      </div>
      <div>
        <img src={sleepIcon} alt='' className='size-16 mb-8' />
        <h2 className='text-gunmetal text-[1.5rem] mb-6 font-semibold tracking-tighter'>
          Adequate sleep
        </h2>
        <p className='text-darkElectricBlue text-base font-normal'>
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </p>
      </div>
    </section>
  );
};

export default Tips;
