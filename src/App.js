import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import MainApp from "./coreApp/main";
import theme from "./theme";
import RecordsPage from "./coreApp/components/RecordsPage";
import PlanPage from "./coreApp/components/PlanPage";
import PatientRecordPage from "./coreApp/components/PatientRecordPage";
import UserInfoForm from "./Components/UserInfoForm";
import SuccessPage from "./coreApp/SuccessPage";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS css

import "./App.css";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-WWW4FRBWB9", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component does not render anything
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can also add other configurations as per requirement
    });
  }, []); // Added useEffect to initialize AOS

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Analytics /> {/* Include the Analytics component here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<MainApp />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/records/:patientName" element={<PatientRecordPage />} />
          <Route path="/userInfoForm" element={<UserInfoForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
