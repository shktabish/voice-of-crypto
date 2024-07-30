import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { pagesData } from '../constants/data';

const Discover = () => {
  const { title } = useParams();
  const pageData = pagesData.find(page => page.title === title.replace(/-/g, ' '));
  const [isLoading, setIsLoading] = useState(true);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div className="min-h-screen" key={pageData.heading} >
      <div className="max-sm:mx-6 max-md:mx-16 mx-28 pb-20">
        <div>Vitamin I {' > '} {pageData.heading}</div>
        <div className="max-sm:text-2xl max-lg:text-3xl text-5xl font-bold text-accent pb-10 pt-5">
          {pageData.heading}
        </div>
        <div>
          <div 
            className={`float-start ${isLoading ? 'bg-white/10 animate-pulse' : ''} max-md:mr-5 mr-10 max-md:mb-5 mb-10 max-sm:w-3/5 max-lg:w-2/4 w-2/5`} 
          >
            <img 
              src={pageData.image} 
              alt="discover image" 
              className='float-start rounded-3xl' 
              width="500" 
              height="300" 
              onLoad={() => setIsLoading(false)} 
            />
          </div>
          {pageData.text.map((paragraph, index) => (
            <p key={index} className="mt-4 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
