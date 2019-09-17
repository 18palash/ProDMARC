import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderHome from './components/pageHeaders/HeaderHome';
import HeaderAbout from './components/pageHeaders/HeaderAbout';
import HeaderResource from './components/pageHeaders/HeaderResource';
import HeaderCustomer from './components/pageHeaders/HeaderCustomer';
import HeaderContact from './components/pageHeaders/HeaderContact';
import HeaderLogin from './components/pageHeaders/HeaderLogin';
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
      <Switch>
        <Route path="/" exact component={HeaderHome} />
        <Route path="/about" component={HeaderAbout} />
        <Route path="/resource" component={HeaderResource} />
        <Route path="/customer" component={HeaderCustomer} />
        <Route path="/contact" component={HeaderContact} />
        <Route path="/login" component={HeaderLogin} />
      </Switch>
      
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
