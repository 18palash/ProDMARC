import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderHome from './components/home/HeaderHome';
import Home from './components/Home';
import About from './components/About';
import Resource from './components/Resource';
import Customer from './components/Customer';
import Contact from './components/Contact';
import UserLogin from './components/login/UserLogin';
import Footer from './components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <HeaderHome/>
        <div className="main main-raised">
          <div className="usercontainer">
                {/* Section 1*/}
                
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/resource" component={Resource} />
              <Route path="/customer" component={Customer} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={UserLogin} />
            </Switch>
          </div>
          </div>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
