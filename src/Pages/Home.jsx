import Header from './../sections/header/Header';
import About from './../sections/about/About';
import Services from './../sections/services/Services';
import Paradise from './../sections/paradise/Paradise';
import Ourworks from './../sections/ourworks/Ourworks';
import Partners from './../components/Partners/Partners';
import Ourprocess from './../sections/ourprocess/Ourprocess';
import Contact from './../sections/contact/Contact';
import React from "react";


const Home = () => {
  return (
    <main>
        <Header />
        <About />
        <Services />
        <Paradise />
        <Ourworks />
        <Partners />
        <Ourprocess />
        <Contact />
    </main>
  );
};

export default Home;
