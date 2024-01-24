import "./navbar.css";
import Logo from "../../assets/navbar/logo.svg";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* Container for the navigation elements */}
      <div className="container nav_container">
        {/* Logo section */}
        <a href="/" className="nav_logo">
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
          <a href="#our_works">Our Works</a>
          <a href="#services">Services</a>
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
