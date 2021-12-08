import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact_Me from './Contact_Me';
import Navbar from './Navbar';
import {Switch, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
      <>
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Contact" component={Contact_Me} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/experience" component={Experience} />
          </Switch>
      </>
  );
}
export default App;

