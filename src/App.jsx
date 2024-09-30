import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BMI from './pages/BMI';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Meals from './pages/Meals';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className='font-inter'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/BMI' element={<BMI />} />
          <Route path='/Meals' element={<Meals />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<TermsOfService />} />
          <Route path='/TermsOfService' element={<TermsOfService />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
