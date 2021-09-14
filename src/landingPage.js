import Button from 'react-bootstrap/Button';
import OffCanvasForm from './OffCanvas';
import { Link } from 'react-scroll';

const LandingPage = ({name,qualification,speciality}) => {

    return ( 
        <div className="landingPage">
            <div className="bg-overlay"></div>
            <div className="landingPage-content">
                <h1>{ name }</h1>
                <p>{ qualification }</p>
                <p>{ speciality }</p>
                <Button variant="primary">
                <Link to="goToAppointment" spy={true} smooth={true}>
                    BOOK AN APPOINTMENT
                </Link>
                </Button>
            </div>
        </div>
     );
}
 
export default LandingPage;