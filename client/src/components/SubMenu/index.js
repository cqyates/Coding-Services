import { Navbar, Nav, Container } from 'react-bootstrap';
const subMenu = ({handlePageChange, currentPage})=> {

  console.log(currentPage)
  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-flex flex-row">
          <Nav className="ml-auto d-flex" style={{ width: "100%", justifyContent: "space-around"}}>
  
              <Nav.Link className="nav-link" onClick={()=> handlePageChange("tutoring")}>
                Educational Support
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={()=> handlePageChange("ecommerce")}>
                Ecommerce Consultations
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={()=> handlePageChange("debugging")}>
                Project Debugging
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default subMenu;