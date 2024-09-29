import { useState } from 'react';
import reactLogo from '../../src/assets/react.svg';
import viteLogo from '../../public/vite.svg';
import './App.css';

// src/App.jsx

import  Product  from  './Product' ;

export  default  function  App () {
   return (
     <div> 
      <h1> Best selling </h1>

      <Product/> 
      <Product/> 
      <Product/> 
    </div>
  );
}
