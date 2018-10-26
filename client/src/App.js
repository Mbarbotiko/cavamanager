import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './reset.css';
import './App.css';
import Dishes from "./pages/Dishes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LogIn from "./pages/LogIn";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="cava-manager.herokuapp.com" component={LogIn} />
        <Route exact path="cava-manager.herokuapp.com/dishes" component={Dishes} />
        <Route exact path="cava-manager.herokuapp.com/dishes/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
