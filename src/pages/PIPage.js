import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'
import Footer from "../components/Footer"
import  Navbar from  '../components/Navbar'
import PIBody from '../components/PIBody'

function PIPage() {
    return (
        <div>
        <div>
            < Navbar />

        </div>

 
        <div  className="container landingContainer ">
            <PIBody />

            
        </div> 
            <Footer/>
    </div>
 
    )
}

export default PIPage
