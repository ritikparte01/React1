import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import About from './pages/About/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Service from "./pages/Service/Service";

import Navbar from "./Components/Navbar/Navbar";



const  App = () => {
  return (

      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
             <Route path="/about" exact>
                <About />
            </Route>
            <Route path="/service" exact>
                <Service />
            </Route>
            <Route path="/contact" exact>
                <Contact />
            </Route>

          <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    
  );
}

export default App;
