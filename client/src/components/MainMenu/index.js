import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-flex flex-row">
          <Nav className="ml-auto d-flex" style={{ width: "100%", justifyContent: "space-around"}}>
  
              <Nav.Link className="nav-link" as={Link} to="/services">
                View Services
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/about">
                Learn About Me
              </Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainMenu;