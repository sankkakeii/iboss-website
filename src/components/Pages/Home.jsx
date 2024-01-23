import Header from './../../sections/header/Header';
import About from './../../sections/about/About';
import Services from './../../sections/services/Services';
import Ourworks from './../../sections/ourworks/Ourworks';
import Partners from './../Partners/Partners';
import Ourprocess from './../../sections/ourprocess/Ourprocess';
import Contact from './../../sections/contact/Contact';
import React from "react";


const Home = () => {
  return (
    <main>
        <Header />
        <About />
        <Services />
        <Ourworks />
        <Partners />
        <Ourprocess />
        <Contact />
    </main>
  );
};

export default Home;
