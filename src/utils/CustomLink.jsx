import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const CustomLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHashLink = to.startsWith('#');
  const isSamePage = location.pathname === '/' && isHashLink;

  const handleClick = (e) => {
    if (isHashLink) {
      e.preventDefault();
      if (location.pathname !== '/') {
        // Navigate to the home page
        navigate('/', { replace: true });
        // Wait for navigation to complete and then scroll
        setTimeout(() => {
          scroller.scrollTo(to.substring(1), {
            smooth: true,
            duration: 500,
          });
        }, 50); 
      } else {
        scroller.scrollTo(to.substring(1), {
          smooth: true,
          duration: 500,
          offset: +100,
        });
      }
    }
  };

  if (isSamePage) {
    return (
      <ScrollLink to={to.substring(1)} smooth={true} duration={500} {...props}>
        {children}
      </ScrollLink>
    );
  } else {
    return (
      <RouterLink to={to.includes('#') ? '/' : to} onClick={handleClick} {...props}>
        {children}
      </RouterLink>
    );
  }
};

export default CustomLink;
