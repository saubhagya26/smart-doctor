import ContactInfo from './ContactInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoLocationOutline,IoMailOpenOutline,IoCallOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const Contact = ({address,email,phNo}) => {

    return ( 
        <div className="contact" id="goToContact">
            <div className="bg-overlay"></div>
            <h1>Contact Us</h1>
            <IconContext.Provider value={{color:"#fff", size:"3rem"}}>
                <div className="contact-info">
                    <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}> <IoLocationOutline className="icon"/>  <ContactInfo contactDetail={address} contactType="Address" /> </Col>
                        <Col lg={4} md={4} sm={12}> <IoMailOpenOutline className="icon"/> <ContactInfo contactDetail={email} contactType="E-mail" /> </Col>
                        <Col lg={4} md={4} sm={12}> <IoCallOutline className="icon"/>  <ContactInfo contactDetail={phNo} contactType="Phone" /> </Col>
                    </Row>
                    </Container>
                </div>
            </IconContext.Provider>
        </div>
     );
}
 
export default Contact;