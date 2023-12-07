import React from 'react';
import '../css/blog.css'
import FlightImg from '../img/Northwest_B757-200.jpg'

const BlogPost = ({ date, title, description, link }) => (
  <div className="pt-6 pb-4 space-y-2">
    <span className="text-s dark:text-gray-400 paragraph">
      <strong>{date}</strong>
    </span>
    <h1 className="text-3xl font-bold capitalTitle">{title}</h1>
    <p className="paragraph text-xl">{description}</p>
    <a rel="noopener noreferrer" href={link} className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
      <span className="paragraph text-base">Read more</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </a>
  </div>
);

const BlogSection1 = () => (
  <div className="dark:bg-gray-800 dark:text-gray-50 py-5">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-5 capitalTitle" >FROM OUR BLOG</h2>
        <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto mb-5" style={{ backgroundImage: `url(${FlightImg})`, backgroundPosition: 'center center', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
            <div className="flex flex-col items-center p-8 py-12 text-center">
            <a rel="noopener noreferrer" href="https://www.nomadicmatt.com/travel-tips/how-to-find-a-cheap-flight/" target="_blank">
                <span className="text-s dark:text-gray-400 paragraph imgtext"><strong>February 5, 2022</strong></span>
                <h1 className="py-4 text-5xl font-bold imgtext capitalTitle" >All About Airline Tickets</h1>
                <p className="pb-6 text-xl imgtext capitalTitle" >Delayed claims, money-saving tips are all here!</p>
            </a>
            </div>
        </div>

      <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700 ">
        <BlogPost
          date="January 16, 2023"
          title="Tokyo in 50 photos"
          description="A long (loooooong) photoessay of my weeks in Japan. Toyko, Fuji, and more."
          link="https://www.legalnomads.com/japan-photoessay/"
        />
        <BlogPost
          date="June 9, 2023"
          title="Unexpectedly in The Dolomites"
          description="I entered the world of Lord of the Rings that day."
          link="https://www.alongdustyroads.com/posts/dolomites-italy-guide"
        />
        <BlogPost
          date="July 19, 2023"
          title="Instagramming Iceland"
          description="Some photos from a magical few days driving Iceland’s Golden Circle."
          link="https://guidetoiceland.is/best-of-iceland/top-11-travel-tips-in-iceland"
        />
      </div>
    </div>
  </div>
);

export default BlogSection1;
