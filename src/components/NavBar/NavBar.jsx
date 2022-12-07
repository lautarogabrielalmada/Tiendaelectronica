import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Alma-Holistica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Ver más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sahumerios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Piramides
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sahumadores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ver todo
              </NavDropdown.Item>
            </NavDropdown>
           
            
          </Nav>
        <div>
            <CartWidget/>
        </div>
          
        </Navbar.Collapse>

        

      </Container>
    </Navbar>
  );
}

export default NavBar;