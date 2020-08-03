import React from "react";
const Cognito = "https://www.cognitoforms.com/s/7axNlrvRDE2MAhk444OM1g";

const Contact = () => {
  return (
    <div className="pt-24 overflow-hidden mt-8 max-w-6xl mx-auto px-16 mb-16 shadow-2xl rounded-lg">
      <h1 className="text-5xl text-red-800">Comunicate con Nosotros</h1>
      <p className="mt-8">
        Para comunicarte con Salazan Automotores, podés pasar por nuestras
        sucursales, contactarte telefónicamente o completar el formulario a
        continuación. A la brevedad nos pondremos en contacto.
      </p>
      <iframe
        src="https://www.cognitoforms.com/f/7axNlrvRDE2MAhk444OM1g?id=1"
        style={{
          position: "relative",
          width: "1px",
          minWidth: "100%",
          width: "100%",
        }}
        frameborder="0"
        scrolling="yes"
        seamless="seamless"
        height="625"
        width="100%"
        title="form"></iframe>
      <script src="https://www.cognitoforms.com/scripts/embed.js"></script>
    </div>
  );
};

export default Contact;
