import React from "react"
import contacto from "../../assets/images/contacto.png"

const ContactButton = () => 
    <a href="https://wa.me/?texto=Quisiera%20consultar%20sobre%20la%20Auto%20%20publicado`" className="rounded-full h-16 w-16 fixed flex md:hidden shadow-xl mb-16 mr-4 md:mr-8" style={{bottom:"0px", right: "0", background:"#5DD468"}}>
        <img src={contacto} alt="" className="w-8 m-auto" />
    </a>
    
export default ContactButton