import React,{Component, useState} from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterBanner from './components/FooterBanner';

function App() {
  return ( 
    <div className="App">
      
      <Footer />
      <FooterBanner />
    </div>
  );
}

export default App;
