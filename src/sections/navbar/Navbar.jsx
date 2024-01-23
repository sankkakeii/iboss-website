import "./navbar.css";
import Logo from "../../assets/navbar/logo.svg";
import { CiMail } from "react-icons/ci";
import { NavLink ,useNavigate, useLocation} from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: "easeInOutQuart",
      duration: 500,
    });
  };

  const handleScrollToSection = (sectionId) => {
    // If on the home page, scroll to the section
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // If on a different page, navigate to the home page and scroll to the section
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);
    }
  };

  return (
    <nav>
      {/* Container for the navigation elements */}
      <div className="container nav_container">
        {/* Logo section */}
        <a href="index.html" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </a>

        {/* Navigation menu section */}
        <ul className="nav_menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* Use handleScrollToSection for the links */}
          <a
            onClick={() => handleScrollToSection("our_works")}
            href="#our_works">         
            Our Works
          </a>
          <a onClick={() => handleScrollToSection("services")} href="#services">
            Services
          </a>
          {/* <a href="#our_works">Our Works</a>
          <a href="#services">Services</a> */}
        </ul>
        {/* Nav icon button */}
        <a href="#contact" id="nav_btn" className="btn primary">
          Get in Touch
          <CiMail style={{ fontSize: "1.4em" }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
