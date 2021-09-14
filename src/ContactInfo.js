const ContactInfo = ({contactDetail,contactType}) => {
    return ( 
        <div className="contactInfo">
            <h2> {contactType} </h2>
            <p> {contactDetail} </p>
        </div>
     );
}

export default ContactInfo;