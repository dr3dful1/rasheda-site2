import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import {BrowserRouter, Route} from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/landing" component={LandingPage}/>    
  </BrowserRouter>
  );
}
 
export default App;
