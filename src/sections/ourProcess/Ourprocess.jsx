import "./ourprocess.css";
import Card from "../../components/Card";
import Discover from "../../assets/Discover.svg"
import Design from "../../assets/Design.svg"
import Develop from "../../assets/Develop.svg"
import Deploy from "../../assets/Deploy.svg"

const Ourprocess = () => {

  return (
    <section id="ourprocess">
      <div className="container ourprocess_container">
        <h2>Our Process</h2>
        <h5>Simple,Seamless,Streamlined</h5>
      </div>
      <div className="ourprocess_card">
        <div className="the_cards">
          <Card>
            <img src={Discover} alt="" />
            <h6>Discover</h6>
            <p>
              We start with a discussion with you so we <br /> can structure team,
              approach, success <br /> metrics, timescale, budget and delegate <br /> required
              skill sets to the task
            </p>
          </Card>
        </div>
        <div className="the_cards">
          <Card>
            <img src={Design} alt="" className="ourprocess_card_img" />
            <h6>Design</h6>
            <p>
              Our design strategy flows from discovery <br /> through a user-focused
              mind-map <br /> to create a total end-to-end deeply <br /> satisfying
              experience.
            </p>
          </Card>
        </div>
        <div className="the_cards">
          <Card>
            <img src={Develop} alt="" />
            <h6>Develop</h6>
            <p>
              Our team of developers consider such <br /> issues as protocols,
              compatibility, <br /> user accessibility and security to code with <br />
              precision and functionality
            </p>
          </Card>
        </div>
        <div className="the_cards">
          <Card>
            <img src={Deploy} alt="" />
            <h6>Deploy</h6>
            <p>
              The end goal is to put a software or an <br /> app in the hand of the
              user, while yet <br /> gathering user feedback for post <br /> deployment
              upgrades
            </p>
          </Card>
        </div>
      </div>
      <div className="btn_process">
        <a href="/" className="btn primary">
          Schedule a Call
        </a>
      </div>
    </section>
  );
};

export default Ourprocess;
