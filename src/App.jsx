import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import './index.css'
import Home from "./pages/Home/Home";
import Login from "./components/LoginForm/Login"
import Footer from "./components/Footer/Footer";
import Signup from "./components/LoginForm/Signup";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";






function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
