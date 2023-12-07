import React from 'react';
function HeroSection2(props) {
    const title = props.title;
    return (
      <div className="bg-white py-5">
        <div className="relative mx-auto hongkongpicture">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img className="h-full w-full object-cover object-center" src={props.imageUrl} alt="hero section img" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl" id="titlename">{title}</h1>
            <a href="registration.html" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100" id="titlename" target="_blank">Select All Tours</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroSection2;