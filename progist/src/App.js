import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import HeaderHome from './components/home/HeaderHome';
import Footer from './components/Footer';
import {BrowserRouter, Route} from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <HeaderHome/>
      <Main/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
