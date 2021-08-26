import ButtonPrimary from "./button/ButtonPrimary";
import TextPrimarySemiLight from "./text/TextPrimarySemiLight";
import TextSecondaryLight from "./text/TextSecondaryLight";
import TextSecondarySemiLight from "./text/TextSecondarySemiLight";
import TextTitleLight from "./text/TextTitleLight"
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
              <TextSecondarySemiLight>Molnar David</TextSecondarySemiLight>
              <TextTitleLight>Full-stack web developer</TextTitleLight>
              <TextPrimarySemiLight>With over 4 years of coding expreience, I always pay attention to detail while focusing on clean, scalable and maintainable code.</TextPrimarySemiLight>
              <div className="card-mobile">
                <TextSecondaryLight><a rel="noreferrer" className="btn-mobile" href="/files/david_molnar_cv.pdf" target="_blank">Resume</a> | <a rel="noreferrer" className="btn-mobile" href="https://github.com/AlaricBell" target="_blank">Github</a> | <a rel="noreferrer" className="btn-mobile" href="https://www.upwork.com/freelancers/~01214b59aff89c6e02" target="_blank">Upwork</a></TextSecondaryLight>
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