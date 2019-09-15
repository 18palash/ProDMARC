import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="navbar  navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
                <div className="container">
                <div className="navbar-translate">
                    <a className="navbar-brand" href>
                    <img src="https://static.wixstatic.com/media/2c92e2_c139e7e41f3d455aa0df8c96cb225403~mv2.png/v1/crop/x_26,y_5,w_316,h_85/fill/w_260,h_70,al_c,q_80,usm_0.66_1.00_0.01/ProDMARC%20logo%20light.webp" /></a>
                    
                
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a  className="nav-link" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"   >
                        Customers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  >
                        Resources
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"   >
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  >
                        Contact Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  >
                        Customer Login
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>

            
            
        </div>
    );
}

export default Header;