import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
import { Hongkong } from './page/hongkong';
import Login from './page/login';
import Registration from './page/registration';
import ScrollToTopButton from './component/returnToTop';
import './App.css'
import { Iceland } from './page/iceland';


function App() {
  return (
    <>
    <ScrollToTopButton />
    <BrowserRouter> 
      <Routes>
        <Route path="/">
          
          <Route index element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/hongkong" element={<Hongkong />} />
          <Route path="/iceland" element={<Iceland />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration  />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
