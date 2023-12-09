import React from "react";
import '../css/main.css'
export function BlogSection2({ imageSrc, title, author, authorLink }){
    return (
        <div className="p-3 mx-auto sm:p-5 md:p-5 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img src={imageSrc} alt="" className="blogpicture blog_picture_height dark:bg-gray-500" />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
              <div className="space-y-2">
                <a rel="noopener noreferrer" href={authorLink} className="inline-block text-2xl font-semibold sm:text-5xl red title ">{title}</a>
                <p className="text-xs dark:text-gray-400 paragraph">By &nbsp;
                  <a rel="noopener noreferrer" href={authorLink} className="text-3xl hover:underline paragraph">{author}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}