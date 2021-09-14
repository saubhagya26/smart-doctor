import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
            <div className="loginForm">
                <Form className = "loginFormElements">
                <h1>Login</h1>
                    <Form.Group size="md" controlId="email">
                        <Form.Label className = "loginFormLabel">Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="md" controlId="password">
                        <Form.Label className = "loginFormLabel">Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <button className="signUpButton">
                        Login
                    </button>
                </Form>
            </div>
     );
}
 
export default LoginForm;