import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'
import Footer from "../components/Footer"
import MainNavbar from  '../components/Navbar'
import ContactBody from '../components/ContactBody'
function Contact() {
    return (
        <div>
            <div>
                <MainNavbar />

            </div>

    
            <div  className="container landingContainer ">
                <ContactBody />

                
            </div> 
                <Footer/>
    </div>
 
 
    )
}

export default Contact
