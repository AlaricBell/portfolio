import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronRight,         
} from "@fortawesome/free-solid-svg-icons";

const ButtonText: React.FC<{children: any, path: string, download?: boolean}> = ({children, path, download = false}) => {
  if(download) {
    return (
      <a rel="noreferrer" href={path} className="btn btn-text" download>{children}<FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></a>
    )
  } else {
    return (
      <a rel="noreferrer" href={path} className="btn-text" target="_blank">{children}<FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></a>
    )
  }
}

export default ButtonText;