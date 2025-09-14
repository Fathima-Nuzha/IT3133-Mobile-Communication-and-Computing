import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header'
import Logo from './components/Logo'
import Body from './components/Body'
import Footer from './components/Footer'
//import Table from './components/Table';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Header />
  
    <Body content="Hello React"  title="Introduction To React" details/>
    
  
    <Footer year="2025" />
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

