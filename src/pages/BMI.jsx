import Calculator from '../components/Calculator';
import Limitations from '../components/Limitations';
import ResultsMeaning from '../components/ResultsMeaning';
import Tips from '../components/Tips';

const BMI = () => {
  return (
    <div className='font-inter'>
      <Calculator />
      <ResultsMeaning />
      <Tips />
      <Limitations />
    </div>
  );
};

export default BMI;
