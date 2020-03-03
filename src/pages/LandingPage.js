import React from 'react'
// import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'


function LandingPage () {
    return (
        <div>
            <LandingImage />
              {/* <Navbar />   */}
            <div className="secondLandingAreaDiv">
                <SecondLandingArea />
            </div>
            <div className="thirdLandingArea">
                
            </div>
              
            
             
                
        </div>
    )
}

export default LandingPage;
