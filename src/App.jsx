import { useState } from 'react'
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
import { Hongkong } from './page/hongkong';
import Login from './page/login';
import Registration from './page/registration';
import ScrollToTopButton from './component/returnToTop';
import './App.css'
import { Iceland } from './page/iceland';
import { Tokyo } from './page/tokyo';
import { Italy } from './page/italy';
import NotFound from './component/notFound';


function App() {
  /*const bodyRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const get = () => {
      const base = window.ontouchstart === undefined ? 950 : 800;
      const rate = Math.min(window.innerWidth / base, window.innerHeight / base, 1);
      const body = bodyRef.current;

      if (body) {
        body.style.width = window.innerWidth / rate + 'px';
        body.style.height = window.innerHeight / rate + 'px';
        body.style.position = 'absolute';
        body.style.left = (window.innerWidth - window.innerWidth / rate) / 2 + 'px';
        body.style.top = (window.innerHeight - window.innerHeight / rate) / 2 + 'px';
        body.style.transform = `scale(${rate})`;
        body.style.transformOrigin = `center center`;
        body.style.transition = '0.5s transform';
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbar = navbarRef.current;

      if (scrollY > 900) {
        navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'transition-navbar');
      } else {
        navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'transition-navbar');
      }
    };

    get();
    window.addEventListener('resize', get);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', get);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);*/

  return (
    <>

    <ScrollToTopButton />
    <div id="body" /*ref={bodyRef}*/>
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/hongkong" element={<Hongkong />} />
            <Route path="/iceland" element={<Iceland />} />
            <Route path="/tokyo" element={<Tokyo />} />
            <Route path="/italy" element={<Italy/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration  />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
   
    </>
  )
}

export default App
