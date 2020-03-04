import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'
import Footer from "../components/Footer"
import MainNavbar from  '../components/Navbar'

function LandingPage () {
    return (
            <div>
                <div>
                    <MainNavbar />

                </div>

         
                <div  className="container landingContainer ">
                    <LandingImage />

                    
                </div> 
                    <Footer/>
            </div>
         
         
    )
}

export default LandingPage;
