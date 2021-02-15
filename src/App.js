import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Sign_up from "./components/pages/Sign_up";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={Sign_up} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
