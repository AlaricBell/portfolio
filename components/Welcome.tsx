import ButtonPrimary from "./button/ButtonPrimary";
import TextPrimarySemiLight from "./text/TextPrimarySemiLight";
import TextSecondarySemiLight from "./text/TextSecondarySemiLight";
import TextTitleLight from "./text/TextTitleLight"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faChevronRight,         
} from "@fortawesome/free-solid-svg-icons";

const Welcome: React.FC = props => {
  return (
    <header id="welcome">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card card-transparent">
              <TextSecondarySemiLight>Molnar David</TextSecondarySemiLight>
              <TextTitleLight>Full-stack web developer</TextTitleLight>
              <TextPrimarySemiLight>With over 4 years of coding expreience, I always pay attention to detail while focusing on clean, scalable and maintainable code.</TextPrimarySemiLight>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card card-button">
              <div className="btn-group">
                <TextSecondarySemiLight>Here is my Past <FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></TextSecondarySemiLight>
                <ButtonPrimary path="/files/david_molnar_cv.pdf" download={true}>Resume</ButtonPrimary>
              </div>

              <div className="btn-group">
                <TextSecondarySemiLight>Check out my projects <FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></TextSecondarySemiLight>
                <ButtonPrimary path="https://github.com/AlaricBell" download={false}>Github</ButtonPrimary>
              </div>
              <div className="btn-group">
                <TextSecondarySemiLight>You can find me on <FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></TextSecondarySemiLight>
                <ButtonPrimary path="https://www.linkedin.com/in/d%C3%A1vid-moln%C3%A1r-a4b8b01a0/" download={false}>LinkedIn</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Welcome;