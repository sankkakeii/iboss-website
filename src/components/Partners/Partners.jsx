import './partners.css'
import QuantumOne  from "../../assets/partners/QuantumOne.svg";
import TangoLogo  from "../../assets/partners/TangoLogo.svg";


const Partners = () => {
  return (
    <section id="partners">
      <div className="container partners_container">
        <div><img src={QuantumOne} alt="" /></div>
        <div><img src={TangoLogo} alt="" /></div>
      </div>
    </section>
  )
}

export default Partners