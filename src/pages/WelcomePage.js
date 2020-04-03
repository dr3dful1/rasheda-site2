import React from 'react'
import SecondLandingArea from '../components/SecondLandingArea'
import {Link} from 'react-router-dom'
function WelcomePage() {
    return (
        <div>
                <div className="videoDiv">
                    
                    <video  autoplay="true" loop="true" muted="true" preload="auto" className="myVideo"
                    source src="./lawyerbackground1.mp4" type="video/mp4"
                    />
                    <a  className="linkAddition"   >
                        <Link to={{pathname:'/landing'}} >
                            <div className="mainPageBoxDiv">
                                <div className="mainPicDiv">
                                <img src="lawfirmlogo.jpg" alt="Italian Trulli" className="navLogo " />
                                </div>

                            </div>
                        </Link>
                    </a>

           
                </div>

             
            
        </div>
    )
}

export default WelcomePage
