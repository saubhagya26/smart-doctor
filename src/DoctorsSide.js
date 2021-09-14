import {useState} from "react";
import { Button } from "react-bootstrap";

const DoctorsSide = () => {

    const[name,setName] = useState('');
    const[qualification,setQualification] = useState('');
    const[speciality,setSpeciality] = useState('');
    const[organization,setOrganization] = useState('');
    const[about,setAbout] = useState('');
    const[achievements,setAchievements] = useState('');
    const[address,setAddress] = useState('');
    const[email,setEmail] = useState('');
    const[phNo,setPhNo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const doctor = {name,qualification,speciality,about,achievements,organization,address,email,phNo};

        fetch('http://localhost:9000/doctors',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(doctor)
        });
    }

    return (
        <>
        <div className="doctorsSide">
            <h1>DOCTOR's DETAILS</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    required
                    value = {name}
                    onChange = { (e) => setName(e.target.value) }
                />
                <label>Qualification</label>
                <input 
                    type="text"
                    required
                    value = {qualification}
                    onChange = { (e) => setQualification(e.target.value) }
                />
                <label>Speciality</label>
                <input 
                    type="text"
                    required
                    value = {speciality}
                    onChange = { (e) => setSpeciality(e.target.value) }
                />
                <label>Organization</label>
                <input 
                    type="text"
                    value = {organization}
                    onChange = { (e) => setOrganization(e.target.value) }
                />
                <label>About</label>
                <input 
                    type="text"
                    required
                    value = {about}
                    onChange = { (e) => setAbout(e.target.value) }
                />
                <label>Achievements</label>
                <input 
                    type="text"
                    value = {achievements}
                    onChange = { (e) => setAchievements(e.target.value) }
                />
                <label>Address</label>
                <input 
                    type="text"
                    required
                    value = {address}
                    onChange = { (e) => setAddress(e.target.value) }
                />
                <label>Email</label>
                <input 
                    type="text"
                    required
                    value = {email}
                    onChange = { (e) => setEmail(e.target.value) }
                />
                <label>Phone No.</label>
                <input 
                    type="text"
                    required
                    value = {phNo}
                    onChange = { (e) => setPhNo(e.target.value) }
                />
                <Button variant="primary" type="submit">Submit</Button>
            </form>
        </div>
        </>
     );
}
 
export default DoctorsSide;