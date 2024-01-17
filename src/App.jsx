import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import OurWorks from "./sections/ourWorks/Ourworks";
import Ourprocess from "./sections/ourProcess/Ourprocess";
import Faqs from "./sections/faqs/Faqs";
import Contact from "./sections/contact/Contact";
import Footer from './sections/footer/Footer';
import AboutHeader from './sections/aboutHeader/AboutHeader';
import Ourvision from "./sections/ourVision/Ourvision";


const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <OurWorks />
      <Ourprocess />
      <Faqs />
      <Contact />
      <AboutHeader/>
      <Ourvision />
      <Footer/>
    </main>
  );
};

export default App;
