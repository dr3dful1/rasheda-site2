import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'
import Footer from "../components/Footer"
import MainNavbar from  '../components/Navbar'
import LawyersBody from '../components/LawyersBody'
function Lawyers () {
    return (
            <div>
                <div>
                    <MainNavbar />

                </div>

         
                <div  className="container landingContainer ">
                    <LawyersBody />

                    
                </div> 
                    <Footer/>
            </div>
         
         
    )
}

export default Lawyers;
