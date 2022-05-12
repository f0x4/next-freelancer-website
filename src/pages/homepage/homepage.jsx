import React from "react";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import LightTheme from "../../layouts/Light";
import Intro from "../../components/Intro/intro";
import Services from "../../components/Services/services";
import Works from "../../components/Works/works";
import About from "../../components/About/about";
import Feedback from "../../components/Feedback/feedback";
import ContactForm from "../../components/Contact-form/contact-form";
import Navbar from "../../components/Navbar/navbar";

const Homepage = () => {
    return (
        <DarkTheme>
            <Navbar />
            <Intro />
            <Services />
            <Works />
            <About />
            <Feedback showHead />
            <ContactForm noLine />
            <Footer />
        </DarkTheme>
    );
};

export default Homepage;
