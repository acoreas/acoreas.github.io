import { Link } from "react-router-dom"
import '../App.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import {AiFillGithub} from "react-icons/ai/index";
import {AiFillLinkedin} from "react-icons/ai/index";


function Navigation () {

  return (
    
      <Navbar className="nav-bar" collapseOnSelect expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand><Link className="nav-bar-brand" to='/'>Alan Coreas</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link ><Link className="nav-bar-item" to="/">Home</Link></Nav.Link>
              {/* Menu dropdown giving too many issues, come back and fix later

                <NavDropdown className="nav-bar-dropdown" title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Header className="nav-bar-dropdown-header">NEUROFUS</NavDropdown.Header>
                <NavDropdown.Item className="nav-bar-dropdown-item">Project 1</NavDropdown.Item>
                <NavDropdown.Item className="nav-bar-dropdown-item">Project 2</NavDropdown.Item>
                <NavDropdown.Item className="nav-bar-dropdown-item">Project 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-bar-dropdown-item">Project 4</NavDropdown.Item>
                </NavDropdown> 

                */}
              <Nav.Link ><Link className="nav-bar-item" to="/projects">Projects</Link></Nav.Link>
              <Nav.Link ><Link className="nav-bar-item" to="/volunteering">Volunteering & Extracurricular</Link></Nav.Link>
              <Nav.Link ><Link className="nav-bar-item" to="/Hobbies">Hobbies & Interests</Link></Nav.Link>
              <Nav.Link><Link className="nav-bar-item" to="/education">Education</Link></Nav.Link>
              <Nav.Link><Link className="nav-bar-item" to="/contact">Contact</Link></Nav.Link>
              <a href="https://github.com/acoreas"><AiFillGithub className="nav-bar-github"/></a>
              <a href="https://www.linkedin.com/in/alancoreas/"><AiFillLinkedin className="nav-bar-linkedin"/></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default Navigation