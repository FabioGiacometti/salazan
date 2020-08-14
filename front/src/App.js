import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Header from "./components/header/Header";
import Contact from "./pages/contact";
import Nuevos from "./pages/nuevos";
import Financiacion from "./pages/financiacion";
import Empresa from "./pages/empresa";
import Footer from "./components/footer/footer";
import Usados from "./pages/usados";
import BottomNavigation from "./components/main/BottomNavigation";
import ContactButton from "./components/main/ContactButton";
const App = () => {
  const [busqueda, setBusqueda] = useState();

  return (
    <div style={{ fontFamily: "sans-serif" }} className="relative">
      <BrowserRouter>
        <Header getSearch={setBusqueda} />
        <div style={{ zIndex: "0" }}>
          <Switch >
            <Route
              path={["/", "index.html", "/home", "/index"]}
              exact
              render={() => <Home busqueda={busqueda} />}
            />
            <Route path="/usados" render={() => <Usados busqueda={busqueda} />} />
  
            <Route path="/:id/detalle" component={Details} />
            <Route path="/nuevos" component={Nuevos} />
            <Route path="/finaciacion" component={Financiacion} />
            <Route path="/empresa" component={Empresa} />
            <Route path="/contacto" component={Contact} />
          </Switch>
        </div>
        <div style={{ zIndex: "10" }}>
                  <ContactButton/>
          <BottomNavigation />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
