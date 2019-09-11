import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
                <div className="container">
                <div className="navbar-translate">
                    <a className="navbar-brand" href>
                    <img src="https://static.wixstatic.com/media/2c92e2_c139e7e41f3d455aa0df8c96cb225403~mv2.png/v1/crop/x_26,y_5,w_316,h_85/fill/w_260,h_70,al_c,q_80,usm_0.66_1.00_0.01/ProDMARC%20logo%20light.webp" /></a>
                    
                
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" >
                        Home
                        </a>
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

            
            <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434_960_720.jpg")'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <h1 className="title">Your Story Starts With Us.</h1>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A molestiae, dignissimos possimus ad totam facilis 
                            ipsam quo? Pariatur cupiditate labore vero laudantium magnam, illum ratione fugit eveniet? Accusamus, cupiditate 
                            voluptate?</h4>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;