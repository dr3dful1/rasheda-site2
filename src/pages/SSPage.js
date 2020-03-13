import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'
import Footer from "../components/Footer"
import  Navbar from  '../components/Navbar'
import SSBody from '../components/SSBody'

function SSPage() {
    return (
        <div>
        <div>
            < Navbar />

        </div>

 
        <div  className="container landingContainer ">
            <SSBody />

            
        </div> 
            <Footer/>
    </div>
 
    )
}

export default SSPage