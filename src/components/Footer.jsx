import '../App.css';
import {AiFillGithub} from "react-icons/ai/index";
import {AiFillLinkedin} from "react-icons/ai/index";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/acoreas"><AiFillGithub className="footer-github"/></a>
      <a href="https://www.linkedin.com/in/alancoreas"><AiFillLinkedin className="footer-linkedin"/></a>
    </div>
  );
}
export default Footer;