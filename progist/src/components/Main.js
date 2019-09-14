import React from 'react';
import Carousel from './carousel/Carousel';
import Contact from './Contact';
const Main = () => {
    return(
        <div>
            <div className="main main-raised">
                <div className="container">
                {/* Section 1*/}
                    <h1>palash</h1>
                    <Carousel/>
                    <Contact/>
                </div>
            </div>
        </div>
    );
}

export default Main;