import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import {BrowserRouter, Route} from 'react-router-dom'; 
// import LandingPage from './components/LandingPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/landing" component={LandingPage}/>    
  </BrowserRouter>
  );
}
 
export default App;
