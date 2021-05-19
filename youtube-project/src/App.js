// import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Link, Route, Switch } from 'react-router-dom';
import Youtube from './Components/Youtube';
import About from './Components/About'

//Yesenia was here 
//this was done with new branch

//Jenna was here 


function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <Link to="/" className="Link">
          <img src="https://www.kindpng.com/picc/m/109-1096605_transparent-youtube-play-button-clipart-cool-youtube-logo.png" alt="Youtube Logo" />
        </Link>
        <Link to="/about" className="Link">About</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Youtube} />
        <Route path="/about" component={About} />
        <p>Hi Jenna </p>
        <p>Hi Yesi</p>
      </Switch>
    </div>
  );
}

export default App;
