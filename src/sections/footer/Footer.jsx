import "./footer.css";
import footerImage from "../../assets/footer/iboss_footer_logo.svg";

const Footer = () => {
  return (
    <footer id="footer" className="container footer_container">
      <div className="logo">
        <img src={footerImage} alt="" />
        <p>
          Consistent pursuit of innovation, excellence, and value through
          technology as levers of digital transformation, process automation,
          transaction facilitation, and data currency for performance
          optimization, revenue assurance, and sustainable growth.
        </p>
      </div>
      <div className="company">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Our works</p>
        <p>Blog</p>
      </div>
      <div className="our_services">
        <h3>Our Services</h3>
        <p>Software Development</p>
        <p>Digital Product Design</p>
        <p>Consulting and Management</p>
        <p>Cloud/Devops</p>
        <p>Marketing</p>
      </div>
      <div className="get_in_touch">
        <h3>Get in touch</h3>
        <p>
          Call: <span>Filler data</span>
        </p>
        <p>
          {" "}
          Email: <span>Filler data</span>
        </p>
        <p>
          {" "}
          Address: <span>Filler data</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
