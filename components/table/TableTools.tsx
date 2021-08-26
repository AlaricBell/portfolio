import CardTool from '../card/CardTool'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faReact,
    faVuejs,
    faAngular,
    faLaravel,
    faJs,
    faPython,
    faPhp,
    faWordpress,
    faBootstrap,
    faSass,
    faDocker,
    faNpm,
    faFigma
} from "@fortawesome/free-brands-svg-icons";

import { 
  faDatabase,
  faCodeBranch     
} from "@fortawesome/free-solid-svg-icons";

const TableTools: React.FC = () => {
  return (
    <div className="table-tool">
      <CardTool title="React">
        <FontAwesomeIcon icon={faReact} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="VueJs">
        <FontAwesomeIcon icon={faVuejs} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Angular">
        <FontAwesomeIcon icon={faAngular} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Laravel">
        <FontAwesomeIcon icon={faLaravel} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Wordpress">
        <FontAwesomeIcon icon={faWordpress} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="JavaScript">
        <FontAwesomeIcon icon={faJs} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="PHP">
        <FontAwesomeIcon icon={faPhp} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Python">
        <FontAwesomeIcon icon={faPython} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Sass">
        <FontAwesomeIcon icon={faSass} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Bootstrap">
        <FontAwesomeIcon icon={faBootstrap} style={{width: '32px', height: '32px'}}/>
      </CardTool>
      
      <CardTool title="SQL">
        <FontAwesomeIcon icon={faDatabase} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="NoSQL">
        <FontAwesomeIcon icon={faDatabase} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Docker">
        <FontAwesomeIcon icon={faDocker} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Git">
        <FontAwesomeIcon icon={faCodeBranch} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="npm">
        <FontAwesomeIcon icon={faNpm} style={{width: '32px', height: '32px'}}/>
      </CardTool>

      <CardTool title="Figma">
        <FontAwesomeIcon icon={faFigma} style={{width: '32px', height: '32px'}}/>
      </CardTool>
    </div>
  )
}

export default TableTools;