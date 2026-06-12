import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo(0, 0);
      return;
    }

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      const y = mainContent.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerWidth >= 1024 ? 60 : 0; 
      window.scrollTo(0, y - offset);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
