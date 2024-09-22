import eatingPic from '/assets/images/image-man-eating.webp';

const ResultsMeaning = () => {
  return (
    <section className='flex flex-col pt-20 gap-12 pb-[4.5rem] md:flex-row md:pr-10 md:pb-24'>
      <img src={eatingPic} alt='' className='w-screen md:w-1/2 md:ml-[-3rem]' />
      <div className='flex flex-col gap-8 mx-6'>
        <h2 className='font-semibold text-gunmetal text-[2rem] leading-[1.1] tracking-[-5%]'>
          What your BMI reuslt means
        </h2>
        <p className='text-base text-darkElectricBlue'>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default ResultsMeaning;
