import LandingPage from './landingPage';
import Navibar from './Navibar';
import About from './About';
import Testimonial from './Testimonial';
import GalleryComp from './Gallery';
import Contact from './Contact';
import Appointment from './Appointment';
import Footer from './footer';
import DoctorsSide from './DoctorsSide';
import Login from './Login';
import useFetch from "./useFetch";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const { error, isPending, data: doctor } = useFetch('http://localhost:9000/doctors/1');

  return (
    <div className="App">
      {
        doctor &&
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage name={doctor.name} qualification={doctor.qualification} speciality={doctor.speciality}/>
              <Navibar clinic={doctor.clinic}/>
              <About about={doctor.about} achievements={doctor.achievements}/>
              <Testimonial />
              <GalleryComp />
              <Contact address={doctor.address} email={doctor.email} phNo={doctor.phNo}/>
              <Appointment/>
              <Footer name={doctor.name}/>
            </Route>
            <Route path="/addDoctor">
              <DoctorsSide />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
