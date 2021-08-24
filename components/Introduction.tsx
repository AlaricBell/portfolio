import WordAnimation from "./text/WordAnimation";
import TextAnimationUltra from "./text/TextAnimationUltra";
import CardText from './card/CardText';

const Introduction: React.FC<{isScrollingUp: boolean, isScrollingDown: boolean}> = ({isScrollingUp, isScrollingDown}) => {
  return (
    <section id="introduction">
      <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <TextAnimationUltra
                align="text-center" 
                isScrollingUp={isScrollingUp ? true : false}
                isScrollingDown={isScrollingDown ? true : false}>
                  Hi, my name is<WordAnimation word=" David. "/> I am a <WordAnimation word=" full-stack "/> 
                  web developer from <WordAnimation word=" Hungary."/>
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
      </div>
    </section>
  )
}

export default Introduction;