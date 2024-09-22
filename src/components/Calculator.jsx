import logo from '/assets/images/logo.svg';
import { useState, useEffect } from 'react';

const Calculator = () => {
  const [activeUnit, setActiveUnit] = useState('metric');
  const [BMI, setBMI] = useState(-1);
  const [currHeightM, setCurrHeightM] = useState(-1);
  const [currWeightKG, setCurrWeightKG] = useState(-1);
  const [currWeightLbs, setCurrWeightLbs] = useState(-1);
  const [currHeightFt, setCurrHeightFt] = useState(-1);
  const [currHeightIn, setCurrHeightIn] = useState(-1);

  useEffect(() => {
    if (currHeightM > 0 && currWeightKG > 0) {
      setBMI((currWeightKG / (currHeightM * currHeightM)).toFixed(1));
    } else {
      setBMI(-1);
    }
  }, [currHeightM, currWeightKG]);

  useEffect(() => {
    if (currHeightFt > 0 && currHeightIn > 0) {
      setCurrHeightM(currHeightFt * 0.3048 + currHeightIn * 0.0254);
    } else {
      setCurrHeightM(-1);
    }
  }, [currHeightFt, currHeightIn]);

  useEffect(() => {
    if (currWeightLbs > 0) {
      setCurrWeightKG(currWeightLbs / 2.205);
    }
  }, [currWeightLbs]);

  return (
    <section className='flex flex-col items-center px-6 pt-8 gap-6 mb-16'>
      <img src={logo} alt='' className='size-10' />
      <h1 className='text-gunmetal font-semibold text-5xl leading-[1.1] tracking-[-.05] text-center '>
        Body Mass Index Calculator
      </h1>
      <p className='text-center text-darkElectricBlue font-normal text-base'>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
      <div className='flex flex-col bg-white rounded-2xl p-6 gap-6 shadow-md '>
        <h3 className='text-[1.5rem] tracking-[-.05] font-semibold'>
          Enter your details below
        </h3>
        <div className='flex-row flex gap-6 text-base font-semibold '>
          <div className='flex content-center gap-[18px] items-center '>
            <button
              className={`relative ${activeUnit === 'metric' ? 'size-[31px] rounded-full bg-systemBlue/15' : 'border border-darkElectricBlue size-[31px] rounded-full hover:border-systemBlue'}`}
              onClick={() => {
                setActiveUnit('metric');
                setBMI(-1);
                setCurrHeightM(-1);
                setCurrHeightFt(-1);
                setCurrHeightIn(-1);
                setCurrWeightKG(-1);
                setCurrWeightLbs(-1);
              }}
            >
              <div
                className={`${activeUnit === 'metric' ? 'absolute  inset-0 m-auto rounded-full size-[15px] bg-systemBlue/100 z-10' : ''}`}
              ></div>
            </button>
            Metric
          </div>
          <div className='flex content-center gap-[18px] items-center'>
            <button
              className={`relative ${activeUnit === 'imperial' ? 'size-[31px] rounded-full bg-systemBlue/15' : 'border hover:border-systemBlue border-darkElectricBlue size-[31px] rounded-full'}`}
              onClick={() => {
                setActiveUnit('imperial');
                setBMI(-1);
                setCurrHeightM(-1);
                setCurrHeightFt(-1);
                setCurrHeightIn(-1);
                setCurrWeightKG(-1);
                setCurrWeightLbs(-1);
              }}
            >
              <div
                className={`${activeUnit === 'imperial' ? 'absolute  inset-0 m-auto rounded-full size-[15px] bg-systemBlue/100 z-10' : ''}`}
              ></div>
            </button>
            Imperial
          </div>
        </div>
        <form className='flex flex-col'>
          <label className='text-[14px] leading-normal text-[#5e6e85] pb-2 '>
            Height
          </label>
          {activeUnit === 'metric' ? (
            <div className='px-6 py-5 border rounded-xl focus-within:border-systemBlue border-darkElectricBlue mb-4 text-gunmetal justify-between font-semiBold flex flex-row gap-6 font-semibold text-[1.5rem] leading-none'>
              <input
                className='w-full flex-grow  focus:outline-none'
                type='number'
                placeholder='0'
                onChange={(e) => {
                  setCurrHeightM(e.target.value / 100);
                }}
              />
              <span className='text-systemBlue content-center'>cm</span>
            </div>
          ) : (
            <div className='flex flex-row gap-4 mb-4'>
              <div className='px-6 py-5 border rounded-xl focus-within:border-systemBlue border-darkElectricBlue font-semibold text-gunmetal justify-between flex flex-row gap-1 text-[1.5rem] leading-none'>
                <input
                  className='w-full flex-grow focus:outline-none'
                  type='number'
                  placeholder='0'
                  onChange={(e) => {
                    setCurrHeightFt(e.target.value);
                  }}
                />
                <span className='text-systemBlue content-center'>ft</span>
              </div>
              <div className=' px-6 py-5 border rounded-xl focus-within:border-systemBlue border-darkElectricBlue font-semibold text-gunmetal justify-between flex flex-row gap-1 text-[1.5rem] leading-none'>
                <input
                  className='w-full flex-grow focus:outline-none'
                  type='number'
                  placeholder='0'
                  onChange={(e) => {
                    setCurrHeightIn(e.target.value);
                  }}
                />
                <span className='text-systemBlue content-center'>in</span>
              </div>
            </div>
          )}

          <label className='text-[14px] leading-normal text-[#5e6e85] pb-2'>
            Weight
          </label>
          {activeUnit === 'metric' ? (
            <div className='px-6 py-5 items-center border rounded-xl focus-within:border-systemBlue border-darkElectricBlue font-semibold text-gunmetal justify-between flex flex-row gap-6 text-[1.5rem] leading-none'>
              <input
                className='w-full flex-grow focus:outline-none'
                type='number'
                placeholder='0'
                value={currWeightKG === -1 ? '' : currWeightKG}
                onChange={(e) => {
                  e.target.value === ''
                    ? setCurrWeightKG(-1)
                    : setCurrWeightKG(e.target.value);
                }}
              />
              <span className='text-systemBlue content-center'>kg</span>
            </div>
          ) : (
            <div className='px-6 py-5 items-center border rounded-xl focus-within:border-systemBlue border-darkElectricBlue font-semibold text-gunmetal justify-between flex flex-row gap-6 text-[1.5rem] leading-none'>
              <input
                className='w-full flex-grow  focus:outline-none'
                type='number'
                placeholder='0'
                value={currWeightLbs === -1 ? '' : currWeightLbs}
                onChange={(e) => {
                  if (e.target.value === '') {
                    setCurrWeightLbs(-1);
                    setCurrWeightKG(-1);
                  } else {
                    setCurrWeightLbs(e.target.value);
                  }
                }}
              />
              <span className='text-systemBlue content-center'>lbs</span>
            </div>
          )}
        </form>
        <div
          className={`${BMI == -1 ? 'bg-systemBlue' : BMI < 18.5 ? 'bg-amber-500' : BMI > 24.9 ? (BMI > 30 ? 'bg-red-600' : 'bg-amber-500') : 'bg-green-500'} text-white rounded-2xl p-8 gap-6`}
        >
          {BMI === -1 ? (
            <>
              <span className='text-xl font-semibold'>Welcome! </span>
              <p className='text-[14px] leading-normal font-normal mt-6'>
                Enter your height and weight and you'll see your BMI result
                here.
              </p>
            </>
          ) : (
            <>
              <p className='text-base font-medium mb-2'>Your BMI is...</p>
              <span className='font-semibold text-5xl leading-[1.1] '>
                {BMI}
              </span>
              {/* underweight */}
              <p className='text-[14px] leading-normal font-normal mt-6'>
                {BMI < 18.5
                  ? "Your BMI suggests you're underweight."
                  : BMI > 24.9
                    ? BMI > 30
                      ? "Your BMI suggests you're obese."
                      : "Your BMI suggests you're overweight."
                    : "Your BMI suggests you're at a healthy weight."}{' '}
                <span>
                  Your ideal weight is between{' '}
                  <b>
                    {activeUnit === 'metric'
                      ? `${(18.5 * currHeightM * currHeightM).toFixed(1)} kg - ${(24.9 * currHeightM * currHeightM).toFixed(1)} kg`
                      : `${(18.5 * currHeightM * currHeightM * 2.20462).toFixed(1)} lbs - ${(24.9 * currHeightM * currHeightM * 2.20462).toFixed(1)} lbs`}
                  </b>
                  .
                </span>
              </p>
              {/* ovrerweight*/}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
