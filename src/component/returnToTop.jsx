import React, { useEffect } from 'react';
import '../css/returnButton.css'
import returnButton from '../icon/up_arrow_icon.png';

function ScrollToTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrollToTopButton = document.getElementById('scrollToTopButton');

      if (scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    };

    const handleButtonClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('scroll', handleScroll);

    const scrollToTopButton = document.getElementById('scrollToTopButton');
    scrollToTopButton.addEventListener('click', handleButtonClick);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollToTopButton.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <>
        <button id="scrollToTopButton">
            <img src={returnButton} />
        </button>
    </>
  );
}

export default ScrollToTopButton;
