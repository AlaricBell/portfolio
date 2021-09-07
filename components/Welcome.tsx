import TextPrimary from "./text/TextPrimary";
import TextSecondary from "./text/TextSecondary";
import TextTitle from "./text/TextTitle"
import ButtonWithText from "./button/ButtonWithText";
import Parallax from 'react-rellax'

const Welcome: React.FC = props => {
  return (
    <header id="welcome">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
          <Parallax speed={3}>
            <div className="card card-transparent">
              <TextSecondary color="semi-light">Molnar David</TextSecondary>
              <TextTitle color="light">Full-stack web developer</TextTitle>
              <TextPrimary color="semi-light">With over 4 years of coding expreience, I always pay attention to detail while focusing on clean, scalable and maintainable code.</TextPrimary>
              <div className="card-mobile">
                <TextSecondary color="light"><a rel="noreferrer" className="btn-mobile" href="/files/david_molnar_cv.pdf" target="_blank">Resume</a> | <a rel="noreferrer" className="btn-mobile" href="https://github.com/AlaricBell" target="_blank">Github</a> | <a rel="noreferrer" className="btn-mobile" href="https://www.upwork.com/freelancers/~01214b59aff89c6e02" target="_blank">Upwork</a></TextSecondary>
              </div>
            </div>
          </Parallax>
          </div>

          <div className="col-12 col-md-6">
          <Parallax speed={5}>
            <div className="card card-button">
              <ButtonWithText 
              path="/files/david_molnar_cv.pdf"
              download={true}
              textContent="Here is my Past"
              buttonContent="Resume"/>

              <ButtonWithText 
              path="https://github.com/AlaricBell"
              download={false}
              textContent="Check out my projects"
              buttonContent="Github"/>

              <ButtonWithText 
              path="https://www.upwork.com/freelancers/~01214b59aff89c6e02"
              download={false}
              textContent="You can find me on"
              buttonContent="Upwork"/>
            </div>
          </Parallax>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Welcome;