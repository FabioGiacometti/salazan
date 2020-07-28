import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Header from "./components/header/Header";
import Contact from "./pages/contact";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/index" exact component={Home} />
            <Route path="/:id/detalle" component={Details} />
            <Route path="/alta" component={Details} />
            <Route path="/finaciacion" component={Details} />
            <Route path="/empresa" component={Details} />
            <Route path="/contacto" component={Contact} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
