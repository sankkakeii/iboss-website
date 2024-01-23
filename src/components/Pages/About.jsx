import React from "react";
import AboutHeader from "./../../sections/aboutheader/AboutHeader";
import Ourvision from "./../../sections/ourvision/Ourvision";
import Wework from './../../sections/wework/Wework';
import Contact from "../../sections/contact/Contact";

const About = () => {
  return (
    <main>
      <AboutHeader />
      <Ourvision />
      <Wework />
      <Contact />
    </main>
  );
};

export default About;
