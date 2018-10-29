import React, { Component } from 'react';
import plate  from './plate.png';
import './LogIn.css';
import '../../media.css';
import { Link } from "react-router-dom";

class LogIn extends Component {
  render() {
    return (
      <div className="landing">
        <header className="landing-header">
          <img src={plate} className="landing-logo" alt="logo" />
          <h1>Cava Manager Menu App</h1>
          
          <Link to={'/dishes'}><h1>[Log In]</h1></Link>

        </header>
      </div>
    );
  }
}

export default LogIn;
