import React from "react";
import Logo from "../header/Logo"

const Footer = () => {
  return (
    <div className="w-full text-white flex p-8 items-center justify-between" style={{background: "#323035"}}>
        <div className="logo -mt-8">
          <img src={require(`../../assets/images/footer_label.jpg`)} alt="" className="mx-auto mb-4"/>
          <Logo />
        </div>
      <div>
        <h3 className="font-bold">CASA CENTRAL</h3>
        <p className="text-xs">
          AV. INDEPENDENCIA 4904
        </p>
        <p className="text-xs">Tel.: (379) 447 2127</p>
        <p className="text-xs">3400 - CORRIENTES</p>
      </div>
      <div>
        <h3 className="font-bold">SUCURSAL</h3>
        <p className="text-xs">
          AV. INDEPENDENCIA 4904
        </p>
        <p className="text-xs">Tel.: (379) 447 2127</p>
        <p className="text-xs">3400 - CORRIENTES</p>
      </div>
      <div className="social"><a href="https://www.facebook.com/SalazanAutomotores" className="flex items-center "><img src={require(`../../assets/images/facebook.png`)} alt="facebookLogo" className="h-8 mr-4"/>/SALAZAN AUTOMOTORES</a></div>
    </div>
  );
};

export default Footer;
