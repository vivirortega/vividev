import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { Slide } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

import { Main } from './style'
import vivi from '../../assets/vivi.png'
import pdf from "../../assets/CV.pdf"

function Home() {
  return (
    <Main>
      <Header />
      <div className="info">
        <div className="user-info">
          <div className="titles">
            <h1>alert("Hello World!👩‍💻");</h1>
            <h2>Desenvolvedora Full Stack e UX/UI Designer.</h2>
          </div>
          <div className="buttons">
            <Link to="/contact">
              <button className="contact">Contato</button>
            </Link>
            <a href={pdf} download="CV.pdf">
              <button className="cv">CV</button>
            </a>
          </div>
        </div>
        <img src={vivi} />
      </div>
      <Footer />
    </Main>
  )
}

export default Home
