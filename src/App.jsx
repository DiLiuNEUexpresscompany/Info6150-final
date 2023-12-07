import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
import Login from './page/login';
import Registration from './page/registration';
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration  />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
