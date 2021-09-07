import TextSecondary from "../text/TextSecondary";
import TextTitle from "../text/TextTitle";

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
        <TextSecondary color="semi-light">{date}</TextSecondary>
        <TextTitle color="light">{title}</TextTitle>
        <img className="img-pc" src={`/img/${img}`} alt="alaric bell blog" />
      </div>

      <a rel="noreferrer" href={path} target="_blank">
        <div className="card card-curtain">
          <TextSecondary color="semi-light">{date}</TextSecondary>
          <TextTitle color="light">{title}</TextTitle>
          <TextSecondary color="semi-light">View project<FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></TextSecondary>
        </div>
      </a>
    </div>
    )
}

export default CardAnimation;