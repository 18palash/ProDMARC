import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import HeaderHome from './components/home/HeaderHome';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header/>
      <HeaderHome/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
