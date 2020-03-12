import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import {BrowserRouter, Route} from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import SSPage from './pages/SSPage';
import PIPage from './pages/PIPage';
import MMPage from './pages/MMPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Lawyers from './pages/Lawyers';
import Testimonials from './pages/Testimonials';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/landing" component={LandingPage}/>    
      <Route exact path="/Social_Security" component={SSPage}/>  
      <Route exact path="/Personal_Injury" component={PIPage}/>  
      <Route exact path="/Medical_Malpractice" component={MMPage}/>  
      <Route exact path="/About" component={About}/> 
      <Route exact path="/Contact" component={Contact}/>   
      <Route exact path="/Lawyers" component={Lawyers}/>   
      <Route exact path="/Testimonials" component={Testimonials}/> 
     </BrowserRouter>
  );
}
 
export default App;
