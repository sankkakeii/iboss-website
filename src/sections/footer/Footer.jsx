import "./footer.css";
import footerImage from "../../assets/footer/iboss_footer_logo.svg";
import Card from "../../components/Card";

const Footer = () => {
  return (
    <footer id="footer" className="container footer_container">
      <div className="footer_image">
        <img src={footerImage} alt="" />
        <p>
          Consistent pursuit of innovation, excellence, and value through
          technology as levers of digital transformation, process automation,
          transaction facilitation, and data currency for performance
          optimization, revenue assurance, and sustainable growth.
        </p>
      </div>

      <div className="company">
        <h4>Company</h4>
        <p>About Us</p>
        <p>Our works</p>
        <p>Blog</p>
      </div>

      <div className="our_services">
        <h4>Our Services</h4>
        <p>Software Development</p>
        <p>Digital Product Design</p>
        <p>Consulting and Management</p>
        <p>Cloud/Devops</p>
        <p>Marketing</p>
      </div>

      <div className="get_in_touch">
        <h4>Get in touch</h4>
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
