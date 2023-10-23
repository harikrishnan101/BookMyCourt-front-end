// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/style/Navbar.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbarmain() {

  const { user } = useSelector((state) => state.user)
  return (
    <>
    <Navbar expand="lg" className="navbar ">
      <Container className='mt-4 ' >
        <Navbar.Brand href="#" className='text-white'>BookMyCourt</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
             
             <Link to={'/home'}>
            <Nav.Link href="#action1" className='text-white'>Home</Nav.Link></Link>
            <Nav.Link href="#action2" className='text-white'>My Booking</Nav.Link>
            {  user.role===2 && 
             <Link to={'/CourtRegistration'}>   <Nav.Link  disabled className='text-white'>Court Registraion </Nav.Link> </Link>}
<Link to={'/MyCourts'}>   <Nav.Link  disabled className='text-white'>MyCourts</Nav.Link> </Link>
          </Nav>

          <NavDropdown className='text-white' title={`${user.firstname} ${user.lastname}`}
            id="navbarScrollingDropdown" >
            <NavDropdown.Item href="#action3" className='mr-5'>About</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>

          </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>



  );
}

export default Navbarmain;