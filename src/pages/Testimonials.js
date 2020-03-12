import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'
import Footer from "../components/Footer"
import MainNavbar from  '../components/Navbar'
import TestimonialsBody from '../components/TestimonialsBody'

function Testimonials() {
    return (
        <div>
            <div>
                <MainNavbar />

            </div>

    
            <div  className="container landingContainer ">
                <TestimonialsBody />

                
            </div> 
                <Footer/>
       </div>
    )
}

export default Testimonials
