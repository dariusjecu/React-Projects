import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Element from './Main_Body';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
      <Header />
      <Element />
      <Footer />
    </>
)

