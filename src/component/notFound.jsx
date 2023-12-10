import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import DividingLine from './dividingLine';
import '../css/main.css'
import '../css/notfound.css'

function NotFound() {

  return (
    <>
     <NavBar />
    <div className="flex items-center justify-center height_1">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 capitalTitle">404 - PageNotFound</h1>
        <p className="text-lg text-gray-600 mb-8 title">Sorry, the page you visited does not exist.</p>
        <a href="/" className="bg_blue  text-white font-bold py-2 px-4 rounded capitalTitle">
          Return HomePage
        </a>
      </div>
    </div>
    <DividingLine />
    <Footer />
    </>
    

  );
}

export default NotFound;