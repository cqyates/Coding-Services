import { Navbar, Nav, Container } from 'react-bootstrap';
import "./style.css"
const subMenu = ({handlePageChange})=> {
  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-flex flex-row">
          <Nav className="ml-auto d-flex" style={{ width: "100%", justifyContent: "space-around"}}>
  
              <Nav.Link className="nav-link" onClick={()=> handlePageChange("tutoring")}>
                Full Stack One on One Tutoring
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={()=> handlePageChange("ecommerce")}>
                Ecommerce Consultations
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={()=> handlePageChange("debugging")}>
                Project Debugging and Deployment
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default subMenu;