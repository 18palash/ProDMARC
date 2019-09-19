import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <nav className="navbar  navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href>                    
                            <div className="logo-image">
                                <Link to="/"  className="nav-link" >
                                    <img src="https://static.wixstatic.com/media/2c92e2_c139e7e41f3d455aa0df8c96cb225403~mv2.png/v1/crop/x_26,y_5,w_316,h_85/fill/w_260,h_70,al_c,q_80,usm_0.66_1.00_0.01/ProDMARC%20logo%20light.webp" className="img-fluid"/>
                                </Link>
                            </div>
                        </a>                                
                    </div>
                
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/"  className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/customer" className="nav-link"   >
                        Customers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resource" className="nav-link"  >
                        Resources
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link"   >
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link"  >
                        Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link"  >
                        Customer Login
                        </Link>
                    </li>
                    </ul>
                </div>
            
        </nav>
        
        </div>
    );
}

export default Header;