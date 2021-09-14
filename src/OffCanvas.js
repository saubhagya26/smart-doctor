import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function OffCanvasForm() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
        <Button variant="primary" onClick={handleShow}>
            BOOK AN APPOINTMENT
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Close</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h2>Book Appointment</h2>
                <p>Please fill in your details</p>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Your Name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Your Email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Phone Number" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Subject" />
                        </Col>
                    </Row>
                    <FloatingLabel controlId="floatingTextarea" label="Leave your message here" className="mb-3">
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
        </>
     );
}
 
export default OffCanvasForm;