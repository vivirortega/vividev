import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { Main } from './style'
import vivi from '../../assets/vivi.png'

function Home() {
  return (
    <Main>
      <Header />
      <div className="info">
        <div className="user-info">
          <div className='titles'>
          <h1>alert("Hello World!👩‍💻");</h1>
          <h2>Desenvolvedora Full Stack e UX/UI Designer.</h2>
          </div>
          <div className="buttons">
            <button className="contact">Contato</button>
            <button className="cv">CV</button>
          </div>
        </div>
        <img src={vivi} />
      </div>
      <Footer />
    </Main>
  )
}

export default Home
