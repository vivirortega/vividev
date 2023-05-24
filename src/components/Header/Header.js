import { Head } from "./style"
import { Link } from "react-router-dom";

function Header() {
    return (
      <Head>
       <ul>
        <Link to={"/"}>
        <li>Home</li>
        </Link>
        <Link to={"/services"}>
        <li>Services</li>
        </Link>
        <Link to={"/skill"}>
        <li>Skills</li>
        </Link>
        <Link to={"/portfolio"}>
        <li>Portfolio</li>
        </Link>
        <Link to={"/experience"}>
        <li>Experience</li>
        </Link>
        <Link to={"/contact"}>
        <li>Contact</li>
        </Link>
       </ul>
      </Head>
    )
  }
  
  export default Header;
  