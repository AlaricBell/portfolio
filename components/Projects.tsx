import WordAnimation from "./text/WordAnimation";
import TextAnimationUltra from "./text/TextAnimationUltra";
import CardAnimation from "./card/CardAnimation"

const Projects: React.FC<{isScrollingUp: boolean, isScrollingDown: boolean}> = ({isScrollingUp, isScrollingDown}) => {
  return (
    <section id="projects">
      <div className="container">

          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <TextAnimationUltra
                align="text-center" 
                isScrollingUp={isScrollingUp ? true : false}
                isScrollingDown={isScrollingDown ? true : false}>
                  Check out some of my personal <WordAnimation word=" projects"/>
              </TextAnimationUltra>
            </div>

            <div className="col-12 col-lg-6" data-aos="fade-up">
              <CardAnimation 
              title="Blog Page - Alaric Bell"
              date="2021"
              img="alaric-pc.png"
              path="https://alaricbell.com"/>
            </div>

            <div className="col-12 col-lg-6" data-aos="fade-up">
              <CardAnimation 
              title="Blog Page - Alaric Bell"
              date="2021"
              img="alaric-pc.png"
              path="https://alaricbell.com"/>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Projects;