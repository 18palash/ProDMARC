import React from 'react';

const Footer = () =>{
    return(
        <footer className="footer footer-default">
            <div className="container">
                <nav className="float-left">
                    <ul>
                    <li>
                        <a>Member of</a>   
                    </li>
                    <li>
                        <img src="https://static.wixstatic.com/media/2c92e2_3ce912d2ffbc46f38ca7b132825b3c72~mv2.png/v1/crop/x_0,y_0,w_132,h_177/fill/w_51,h_69,al_c,q_80,usm_0.66_1.00_0.01/Global_Cyber_Alliance.webp" />
                    </li>
                    <li>
                        <img src="https://static.wixstatic.com/media/2c92e2_3ce912d2ffbc46f38ca7b132825b3c72~mv2.png/v1/crop/x_127,y_0,w_264,h_177/fill/w_102,h_69,al_c,q_80,usm_0.66_1.00_0.01/Global_Cyber_Alliance.webp" />
                    </li>
                    </ul>
                </nav>
                <div className="copyright float-right">
                   <p>© 2019, made by <a>Palash Khobragade.</a></p> 
                </div>
            </div>
      </footer>
    );
}

export default Footer;