import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import img from "./images/img-5.png";

const Appointment = () => {

    const[custName,setCustName] = useState('');
    const[custEmail,setCustEmail] = useState('');
    const[custPhNo,setCustPhNo] = useState('');
    const[custSub,setCustSub] = useState('');
    const[custMess,setCustMess] = useState('');
    const[isPending,setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setisPending(true);
        e.preventDefault();
        const enquiry = {custName,custEmail,custPhNo,custSub,custMess};
        console.log(enquiry);

        fetch('http://localhost:9000/enquiries',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(enquiry)
        }).then(() => {
            setisPending(false);
            history.push('/');
            setCustName('');
            setCustEmail('');
            setCustPhNo('');
            setCustSub('');
            setCustMess('');
        });
    }

    return ( 
        <div className="appointment"id="goToAppointment" >
            <h1>Book Appointment</h1>
            <p>Please fill in your details</p>
                <Row>
                    <Col lg={5} md={4}>
                        <img src={img} alt="" width="300px"/>
                    </Col>
                    <Col>
                        <Form onSubmit={ handleSubmit }>
                        <Row>
                            <Col lg={6} md={10} sm={12}  className="appForm">
                                <Form.Control 
                                    placeholder="Your Name"
                                    type="text"
                                    required
                                    value={custName}
                                    onChange={ (e) => setCustName(e.target.value) }
                                />
                            </Col>
                            <Col lg={6} md={10} sm={12} className="appForm">
                                <Form.Control 
                                    placeholder="Your Email" 
                                    type="email"
                                    value={custEmail}
                                    onChange={ (e) => setCustEmail(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={10} sm={12} className="appForm">
                                <Form.Control 
                                    placeholder="Phone Number"
                                    type="text"
                                    required
                                    value={custPhNo}
                                    onChange={ (e) => setCustPhNo(e.target.value) }
                                />
                            </Col>
                            <Col lg={6} md={10} sm={12} className="appForm">
                                <Form.Control 
                                    placeholder="Subject" 
                                    type="text"
                                    required
                                    value={custSub}
                                    onChange={ (e) => setCustSub(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={10} className="appForm">
                                <FloatingLabel controlId="floatingTextarea" label="Leave your message here" className="mb-3">
                                    <Form.Control 
                                        as="textarea" 
                                        placeholder="Leave a comment here"
                                        type="text"
                                        required
                                        value={custMess}
                                        onChange={ (e) => setCustMess(e.target.value) }
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        { !isPending && <Button variant="primary" type="submit">Send Message</Button> }
                        { isPending && <Button variant="primary" type="submit" disabled>Submitted..</Button> }
                        </Form>                    
                    </Col>
                </Row>

        </div>
     );
}
 
export default Appointment;