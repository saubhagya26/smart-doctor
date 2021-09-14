import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Login = () => {

    return ( 
        <div className="login">
            <div className="bg-overlay"></div>
            <LoginForm />
            <SignUpForm />
        </div>
     );
}
 
export default Login;