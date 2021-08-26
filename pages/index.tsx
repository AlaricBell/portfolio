import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Introduction from '../components/Introduction'

import LayoutPrimary from '../components/layout/LayoutPrimary'
import Projects from '../components/Projects'
import Welcome from '../components/Welcome'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
import Load from '../components/base/Load'

const Home: NextPage = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [endLoading, setEndLoading] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    setTimeout(() => setEndLoading(true), 2500);
    setTimeout(() => setIsLoading(false), 3000);

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      if(scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingUp(true);
      }
      setTimeout(() => {
        setIsScrollingDown(false);
        setIsScrollingUp(false);
      }, 400)
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LayoutPrimary>
        {isLoading && <Load endLoading={endLoading}/>}
        <Welcome />
        <main>
          <Introduction 
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}/>
          <Projects
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}/>
          <Tools
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}/>
          <Contact
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}/>
        </main>
    </LayoutPrimary>
  )
}

export default Home
