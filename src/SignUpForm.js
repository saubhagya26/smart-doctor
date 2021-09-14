import Form from "react-bootstrap/Form";
import { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return ( 
        <div className="signUpForm">
            <h1>Sign Up</h1>
            <Form>
                <Form.Group className="formField" size="md" controlId="name">
                    <Form.Label className = "loginFormLabel">Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="formField" size="md" controlId="email">
                    <Form.Label className = "loginFormLabel">Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="formField" size="md" controlId="password">
                    <Form.Label className = "loginFormLabel">Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="formField" size="md" controlId="confirmPassword">
                    <Form.Label className = "loginFormLabel">Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                </Form.Group>
                <button className="signUpButton">
                    Sign Up
                </button>
            </Form>
        </div>
     );
}
 
export default SignUpForm;