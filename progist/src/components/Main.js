import React from 'react';
import Home from './Home';
import About from './About';
import Resource from './Resource';
import Customer from './Customer';
import Contact from './Contact';
import UserLogin from './login/UserLogin';
import {BrowserRouter, Route} from 'react-router-dom';

const Main = () => {
    return(
        <BrowserRouter>
        <div>
            <div className="main main-raised">
                <div className="container">
                {/* Section 1*/}
                <switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resource" component={Resource} />
                <Route path="/customer" component={Customer} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={UserLogin} />
                
                </switch>
                    
                    
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Main;