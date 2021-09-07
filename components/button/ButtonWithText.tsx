import TextSecondary from "../text/TextSecondary";
import ButtonPrimary from "./ButtonPrimary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faChevronRight,         
} from "@fortawesome/free-solid-svg-icons";

const ButtonWithText: React.FC<{path: string, textContent: string, buttonContent:string, download: boolean}> = ({path, textContent, buttonContent, download = false}) => {
  return (
    <div className="btn-group">
      <TextSecondary color="semi-light">{textContent}<FontAwesomeIcon icon={faChevronRight} style={{width: '14px', height: '14px'}}/></TextSecondary>
      <ButtonPrimary path={path} download={download}>{buttonContent}</ButtonPrimary>
    </div>
  )
}

export default ButtonWithText;