import React from 'react'
import {Nav, NavItem,Navbar,Badge} from 'react-bootstrap'

function MainNavbar() {
    return (
        <div className="mainNav">
            <div className="logoDiv">
                <img src="lawfirmlogo.jpg" alt="Italian Trulli" className="navLogo " />
            </div>
            <div className="navLinkDiv">
                <div className="navLink1">
                    <p className="navLinkFont">
                        AREAS OF PRACTICE
                    </p>
                </div>
                 <div className="navLink2">
                    <p className="navLinkFont">
                        CONTACT US
                    </p>
                </div>
                 <div className="navLink3">
                    <p className="navLinkFont">
                        ABOUT US
                    </p>
                </div>
                 <div className="navLink4">
                    <p className="navLinkFont">
                        ATTORNEYS
                    </p>
                </div>
                 <div className="navLink5">
                     <p className="navLinkFont">
                        TESTIMONIALS
                    </p>

                </div>


            </div>
        </div>
      
    )
}

export default MainNavbar
