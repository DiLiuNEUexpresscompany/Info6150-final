import React, { useState, useEffect } from 'react';
import '../css/herosection.css'
import '../css/main.css'

import hongkongImage from '../img/hongkong2-Victoria-Harbour.webp';
import churchImage from '../img/Church_of_light.jpg';
import tokyoImage from '../img/Tokyo Skyline.webp';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [autoTimer, setAutoTimer] = useState(null);
  const images = [hongkongImage, churchImage, tokyoImage];
  const imageCount = images.length;
  useEffect(() => {
    const container = document.querySelector('.carousel .container');
    container.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);
  useEffect(() => {
    const indicators = document.querySelectorAll('.carousel .bottom .indicator.active');
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
  }, [index]);
  useEffect(() => {
    const bottom = document.querySelector('.carousel .bottom');
    bottom.innerHTML = ''; 
    for (let i = 0; i < imageCount; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.onclick = () => setIndex(i);
      bottom.append(indicator);
    }
  }, []);
  useEffect(() => {
    let autoTimer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, 7000);
    setAutoTimer(autoTimer);
    return () => {
      clearInterval(autoTimer);
    };
  }, []);
  const leftShift = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imageCount) % imageCount);
  };

  const rightShift = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imageCount);
  };

  return (
    <section className="mb-5">
      <div className="px-6 py-5 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="carousel md:mb-12 lg:mb-0">
              <div className="container">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  className={`w-full rounded-lg shadow-lg dark:shadow-black/20 transition-opacity duration-500 ${i === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                />
              ))}
              </div>
              <div className="shift">
                <div className="btn left" onClick={leftShift}>&lt;</div>
                <div className="btn right" onClick={rightShift}>&gt;</div>
              </div>
              <div className="bottom"></div>
            </div>
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 ">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl title" id="herosectioname">
                  Best Techniques <br /><br /><span className="text-primary">For<br /><br />ALL Travelers</span>
                </h1>
                <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0 title buttonColor" ata-te-ripple-init="true" data-te-ripple-color="light" href="registration" role="button" id="startbutton" target="_blank">Get started</a>
                <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40 title" data-te-ripple-init data-te-ripple-color="light" href="#!" role="button" id="titlename" target="_blank">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
