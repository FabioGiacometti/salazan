import React from "react"
import contacto from "../../assets/images/tel.png"

const ContactButton = () => 
    <a href="https://wa.me/5493794742764?text=Me%20interesa%20un%20auto%20que%20estás%20vendiendo" className="rounded-full h-16 w-16 fixed flex md:hidden shadow-xl mb-16 mr-4 md:mr-8" style={{bottom:"0px", right: "0"}}>
        <img src={contacto} alt="" className="w-full m-auto" />
    </a>
    
export default ContactButton