import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BMI from './pages/BMI';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Meals from './pages/Meals';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className='font-inter'>
        <Navbar />
        <Routes>
          <Route path='/bmi-calculator' element={<Home />} />
          <Route path='/bmi-calculator/BMI' element={<BMI />} />
          <Route path='/bmi-calculator/Meals' element={<Meals />} />
          <Route path='/bmi-calculator/Profile' element={<Profile />} />
          <Route path='/bmi-calculator/Signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
