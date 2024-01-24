import "./navbar.css";
import Logo from "../../assets/navbar/logo.svg";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav>
      {/* Container for the navigation elements */}
      <div className=" nav_container">
        {/* Logo section */}
        <HashLink smooth to="/#top" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </HashLink>

        {/* Navigation menu section */}
        <ul className="nav_menu">
          <li>
            <HashLink smooth to="/#top" activeClassName="active">
              Home
            </HashLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <HashLink smooth to="/#our_works" activeClassName="active">
              Our Works
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services" activeClassName="active">
              Services
            </HashLink>
          </li>
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
