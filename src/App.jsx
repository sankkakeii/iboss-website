import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import OurWorks from "./sections/ourworks/Ourworks";
import Ourprocess from "./sections/ourprocess/Ourprocess";
import Faqs from "./sections/faqs/Faqs";
import Contact from "./sections/contact/Contact";
import Footer from './sections/footer/Footer';
import AboutHeader from './sections/aboutheader/AboutHeader';
import Ourvision from "./sections/ourvision/Ourvision";
import Partners from "./components/Partners/Partners";
import Wework from "./sections/wework/Wework";


const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <OurWorks />
      <Partners />
      <Ourprocess />
      <Faqs />
      <Contact />
      <Wework/>
      <AboutHeader/>
      <Ourvision />
      <Footer/>
    </main>
  );
};

export default App;
