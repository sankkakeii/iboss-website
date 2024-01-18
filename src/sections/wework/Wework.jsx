import './wework.css'
import Card from '../../components/Card'
import data from './data'

const Wework = () => {
  return (
    <section id="wework">
        <h2>Why Work With Us</h2>

        <div className="container wework_container">
            {
                data.map((item) => (
                    <Card key={item.id} className={`${item.cardish}`}>

                    </Card>
                ))
            }
        </div>
    </section>
  )
}

export default Wework