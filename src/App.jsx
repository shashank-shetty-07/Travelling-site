import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../src/components/Home/Home";
import LoginSignUp from "./components/Auth/LoginSignup";
import { AuthProvider } from "./components/Auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
    <Router>
      {/* Navbar is displayed on all pages 
      <NavBar />*/}
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
