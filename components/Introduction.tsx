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
                  Hi, my name is<WordAnimation word=" David"/>, I am a <WordAnimation word=" full-stack "/> 
                  web developer from <WordAnimation word=" Hungary"/>
              </TextAnimationUltra>
            </div>

            <div className="col-12">
              <CardText
              title="My work"
              miniTitle="What can you expect?"
              content="I specialize in creating responsive websites with various functionalities, while thinking of the long-term run, 
              test and maintainability. You need a complex project for an exsisting product, or just want something eye-catching for a new startup? 
              Hit me up and let's create something outstanding!"
              align="text-left" 
              isScrollingUp={isScrollingUp ? true : false}
              isScrollingDown={isScrollingDown ? true : false}/>
            </div>

            <div className="col-12">
            <CardText
              title="Attitude"
              miniTitle="Experience working with me!"
              content="By choosing me, you are not choosing a big company with various different projects, you are choosing me and my complete attention. 
              I am proud of my healthy relationship with my clients, you can expect regular meetings and updates in order to create a product that is the closest to your expectations"
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