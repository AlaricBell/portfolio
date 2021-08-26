import TextSecondarySemiLight from "../text/TextSecondarySemiLight";
import TextTitleLight from "../text/TextTitleLight";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronRight,         
} from "@fortawesome/free-solid-svg-icons";

const CardAnimation: React.FC<{title: string,
                               date: string,
                               img: string,
                               path: string}> = ({title, date, img, path}) => {
    return (
    <div className={`card card-animation`} data-aos="fade-up">


      <div className="card-title">
        <TextSecondarySemiLight>{date}</TextSecondarySemiLight>
        <TextTitleLight>{title}</TextTitleLight>
        <img className="img-pc" src={`/img/${img}`} alt="alaric bell blog" />
      </div>

      <a rel="noreferrer" href={path} target="_blank">
        <div className="card card-curtain">
          <TextSecondarySemiLight>{date}</TextSecondarySemiLight>
          <TextTitleLight>{title}</TextTitleLight>
          <TextSecondarySemiLight>View project<FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></TextSecondarySemiLight>
        </div>
      </a>
    </div>
    )
}

export default CardAnimation;