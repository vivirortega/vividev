import Header from "../../components/Header/Header";
import { Main } from "./style";
import vivi from "../../assets/vivi.png"

function Home() {
  return (
    <Main>
    <Header/>
    <div className="info">
      <div className="user-info">
      <h1>alert("Hello World!");</h1>
      <h2>Sou Vivi, Desenvolvedora Full Stack e UX/UI Designer.</h2>
      <div className="buttons">
      <button className="contact">Contato
      </button>
      <button className="cv">CV</button>
      </div>
      </div>
      <img src={vivi}/>
      </div>
      
    </Main>
  )
}

export default Home;
