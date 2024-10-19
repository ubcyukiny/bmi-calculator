import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BMI from "./pages/BMI";
import MyProfile from "./pages/MyProfile";
import Signup from "./pages/Signup";
import Meals from "./pages/Meals";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import EditProfile from "./pages/EditProfile";
import PrivateRoute from "./configs/routes/PrivateRoute";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="font-inter">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/Meals" element={<Meals />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/TermsOfService" element={<TermsOfService />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route
              path="/MyProfile"
              element={
                <PrivateRoute>
                  <MyProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/EditProfile"
              element={
                <PrivateRoute>
                  <EditProfile />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
