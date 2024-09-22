import genderIcon from '/assets/images/icon-gender.svg';
import ageIcon from '/assets/images/icon-age.svg';
import muscleIcon from '/assets/images/icon-muscle.svg';
import pregIcon from '/assets/images/icon-pregnancy.svg';
import raceIcon from '/assets/images/icon-race.svg';

const Limitations = () => {
  return (
    <section className='flex flex-col py-14 pr-7 px-5 gap-14 md:px-10 md:py-24'>
      <div>
        <h2 className=' text-center text-[2rem] font-semibold tracking-[-0.05] leading-[1.1] mb-8'>
          Limitations of BMI
        </h2>
        <p className='text-center text-darkElectricBlue'>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className='flex flex-col gap-4 text-darkElectricBlue md:grid md:grid-cols-4 md:grid-rows-3 md:gap-x-4 md:gap-y-6 '>
        <div className='limitations-card md:col-span-2'>
          <div className='items-center flex flex-row gap-4'>
            <img src={genderIcon} alt='' className='size-8' />
            <h3 className='text-[1.25rem] font-semibold tracking-[-0.05] text-gunmetal'>
              Gender
            </h3>
          </div>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className='limitations-card md:col-span-2'>
          <div className='items-center flex flex-row gap-4'>
            <img src={ageIcon} alt='' className='size-8' />
            <h3 className='text-[1.25rem] font-semibold tracking-[-0.05] text-gunmetal'>
              Age
            </h3>
          </div>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className='limitations-card  md:col-span-2'>
          <div className='items-center flex flex-row gap-4'>
            <img src={muscleIcon} alt='' className='size-8' />
            <h3 className='text-[1.25rem] font-semibold tracking-[-0.05] text-gunmetal'>
              Muscle
            </h3>
          </div>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className='limitations-card  md:col-span-2'>
          <div className='items-center flex flex-row gap-4'>
            <img src={pregIcon} alt='' className='size-8' />
            <h3 className='text-[1.25rem] font-semibold tracking-[-0.05] text-gunmetal'>
              {' '}
              Pregnancy
            </h3>
          </div>
          <p>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className='limitations-card  md:col-span-2 md:col-start-2'>
          <div className='items-center flex flex-row gap-4'>
            <img src={raceIcon} alt='' className='size-8' />
            <h3 className='text-[1.25rem] font-semibold tracking-[-0.05] text-gunmetal'>
              Race
            </h3>
          </div>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Limitations;
