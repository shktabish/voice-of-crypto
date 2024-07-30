import React from 'react';
import { useParams } from 'react-router-dom';
import { pagesData } from '../constants/data';

const Discover = () => {
  const { title } = useParams();
  const pageData = pagesData.find(page => page.title === title.replace(/-/g, ' '));

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="max-sm:mx-6 max-md:mx-16 mx-28 pb-20">
        <div>Vitamin I {' > '} {pageData.heading}</div>
        <div className="max-sm:text-2xl max-lg:text-3xl text-5xl font-bold text-accent pb-10 pt-5">{pageData.heading}</div>
        <div>
          <img src="./pages/discover.svg" alt="discover image" className='float-start max-md:pr-5 pr-10 max-md:pb-5 pb-10 max-sm:w-3/5 max-lg:w-2/4 w-2/5' />
          {pageData.text.map((paragraph, index) => (
            <p key={index} className="mt-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
