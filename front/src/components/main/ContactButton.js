import React from "react"
import contacto from "../../assets/images/contacto.png"

const ContactButton = () => 
    <a href="https://wa.me/5493794742764?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo`" className="rounded-full h-12 w-12 bg-green-600 fixed flex md:hidden shadow-xl mb-16 mr-4 md:mr-8" style={{bottom:"0px", right: "0"}}>
        <img src={contacto} alt="" className="w-6 m-auto" />
    </a>
    
export default ContactButton