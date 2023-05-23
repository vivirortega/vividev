import { Foot } from './style'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillBehanceSquare,
} from 'react-icons/ai'

function Footer() {
  return (
    <Foot>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/vitoriarortega/">
            <AiFillLinkedin className="icon" />
          </a>
        </li>
        <li>
            <a href='https://github.com/vivirortega'>
          <AiFillGithub className="icon" />
          </a>
        </li>
        <li>
            <a href='https://www.behance.net/vivirortega'>
          <AiFillBehanceSquare className="icon" />
          </a>
        </li>
      </ul>
      <h3>vitoriarortega@gmail.com</h3>
    </Foot>
  )
}

export default Footer
