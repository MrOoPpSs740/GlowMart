// Home.jsx placeholder
import React from "react";
import "./Home.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";

import Products from '../Products/Products';
import ContactUs from "../Contact/ContactUs";
import AboutUs from "../About/AboutUs";

const Home = () => {
    return (<>
        <Header/>
        <HeroSection/>


        <Products/>
        <AboutUs/>
        <ContactUs/>


    </>);
};

export default Home;
