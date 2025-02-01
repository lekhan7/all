import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Thenavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">DOC KEEPER</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/regester">Rigister</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/upload">Upload</Nav.Link>
        <Nav.Link href="/share">share</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  )
}

export default Thenavbar