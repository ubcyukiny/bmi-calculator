import './App.css';
import Calculator from './components/Calculator';
import Limitations from './components/Limitations';
import ResultsMeaning from './components/ResultsMeaning';
import Tips from './components/Tips';

function App() {
  return (
    <div className='bg-gradient-to-br from-[rgba(214,252,254,0)] to-[rgba(214,230,254,100)] h-screen font-inter'>
      <Calculator />
      <ResultsMeaning />
      <Tips />
      <Limitations />
    </div>
  );
}

export default App;
