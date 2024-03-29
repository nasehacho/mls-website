import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutMLS from './components/AboutMLS/AboutMLS'
import UploadFile from './components/UploadFile/UploadFile'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatApp from './components/ChatApp/ChatApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/home" element={<App/>} />
      <Route path="/about" element={<AboutMLS/>} />
      <Route path="/upload" element={<UploadFile/>} />      
      <Route path="/discuss" element={<ChatApp/>} />      
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
