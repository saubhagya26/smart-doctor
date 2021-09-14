import { Link } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Navibar = ({clinic}) => {

    return ( 
        <div className="navibar">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">{ clinic }</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link><Link to="goToAbout" spy={true} smooth={true}>About</Link></Nav.Link>
                    <Nav.Link><Link to="goToTestimonial" spy={true} smooth={true}>Testimonial</Link></Nav.Link>
                    <Nav.Link><Link to="goToGallery" spy={true} smooth={true}>Gallery</Link></Nav.Link>
                    <Nav.Link><Link to="goToContact" spy={true} smooth={true}>Contact</Link></Nav.Link>
                    <Nav.Link><Link to="goToAppointment" spy={true} smooth={true}>Booking</Link></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default Navibar;