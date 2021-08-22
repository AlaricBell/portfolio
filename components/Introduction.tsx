import Parallax from 'react-rellax'
import { useState, useEffect, useRef } from "react";

import WordAnimation from "./text/WordAnimation";
import TextAnimationUltra from "./text/TextAnimationUltra";
import CardText from './card/CardText';

const Introduction: React.FC = props => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const introduction = useRef(null);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
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
    <section id="introduction" ref={introduction}>
      <div className="container">
        <Parallax speed={3}>
          <div className="row">
            <div className="col-12">
              <TextAnimationUltra
                align="text-center" 
                isScrollingUp={isScrollingUp ? true : false}
                isScrollingDown={isScrollingDown ? true : false}>
                  Hi, my name is<WordAnimation word=" David. "/> I am a <WordAnimation word=" full-stack "/> 
                  web developer from <WordAnimation word=" Hungary."/> Have a project in mind? Let's work 
                  <WordAnimation word=" together"/>
              </TextAnimationUltra>
            </div>

            <div className="col-12">
              <CardText
              title="Let's work together!"
              miniTitle="Let's work together!"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Assumenda earum omnis quidem animi vero deserunt repellendus blanditiis,
              esse nulla, et, dolore ipsam quae magnam. Laborum fugit provident dolorum adipisci! Dolores!"
              align="text-left" 
              isScrollingUp={isScrollingUp ? true : false}
              isScrollingDown={isScrollingDown ? true : false}/>
            </div>

            <div className="col-12">
            <CardText
              title="Let's work together!"
              miniTitle="Let's work together!"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Assumenda earum omnis quidem animi vero deserunt repellendus blanditiis,
              esse nulla, et, dolore ipsam quae magnam. Laborum fugit provident dolorum adipisci! Dolores!"
              align="text-right" 
              isScrollingUp={isScrollingUp ? true : false}
              isScrollingDown={isScrollingDown ? true : false}/>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  )
}

export default Introduction;