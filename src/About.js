const About = ({about,achievements}) => {

    return ( 
        <div className="about" id="goToAbout">
            <h1>About</h1>
            <p>{ about }</p>
            <h2> Achievements </h2>
            <p>{ achievements }</p>
        </div>
     );
}
 
export default About;