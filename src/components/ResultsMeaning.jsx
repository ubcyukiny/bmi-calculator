import eatingPic from '/assets/images/image-man-eating.webp';

const ResultsMeaning = () => {
  return (
    <section className='lg:px-36 lg:gap-20 lg:pb-24 2xl:justify-center lg:pt-16 flex flex-col pt-[440px] gap-12 pb-[4.5rem] md:flex-row md:pt-44 md:pr-10 sm:pt-72 md:pb-24'>
      <img
        src={eatingPic}
        alt=''
        className='w-full md:w-1/2 md:ml-[-3rem] object-cover lg:max-w-[600px]'
      />
      <div className='flex flex-col gap-8 mx-6 lg:justify-end lg:pb-7 lg:max-w-[600px]'>
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
