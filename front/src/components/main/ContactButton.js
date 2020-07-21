import React from "react"
import contacto from "../../assets/images/contacto.png"

const ContactButton = () => 
    <div className="rounded-full h-16 w-16 bg-green-700 fixed flex md:hidden shadow-xl mb-16 mr-4 sm:mb-4 md:mb-8 md:mr-8" style={{bottom:"0px", right: "0"}}>
        <img src={contacto} alt="" className="w-8 m-auto" />
    </div>
    
export default ContactButton