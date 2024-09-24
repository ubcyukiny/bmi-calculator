import './App.css';
import Calculator from './components/Calculator';
import Limitations from './components/Limitations';
import ResultsMeaning from './components/ResultsMeaning';
import Tips from './components/Tips';

function App() {
  return (
    <div className='font-inter '>
      <Calculator />
      <ResultsMeaning />
      <Tips />
      <Limitations />
    </div>
  );
}

export default App;
