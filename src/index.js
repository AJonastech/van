import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Vans from './pages/Vans';
import About from './pages/About';
import Vanfilter from './pages/Vanfilter';
import Vandetails from './pages/Vandetails';
import { SkeletonTheme } from 'react-loading-skeleton';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path="/vans" element={<Vans/>}/>
 <Route path="/about" element={<Vans/>}/>
 <Route path="/vans/filter/:type" element={<Vanfilter/>}/>
 <Route path="/vans/:id" element={<Vandetails/>}/>
 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
