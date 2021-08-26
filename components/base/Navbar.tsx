import {useState} from 'react'
import TextSecondarySemiLight from '../text/TextSecondarySemiLight';
import TextTitleLight from '../text/TextTitleLight';

const Navbar: React.FC = props => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-initial">
      <a href="#">
        <div className="brand">
          <TextTitleLight>Molnar David</TextTitleLight>
          <TextSecondarySemiLight>Full-Stack Developer</TextSecondarySemiLight>
        </div>
        </a>
        <div className="icon-container" onClick={() => setIsVisible(!isVisible)}>
          <div id="icon-collapse" className={isVisible ? "collapsed" : ""} ></div>
        </div>
      </div>


      <div id="nav-collapse" className={`nav-dropdown ${isVisible ? "nav-collapsed" : ""}`}>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#" onClick={() => setIsVisible(!isVisible)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#introduction" onClick={() => setIsVisible(!isVisible)}>About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={() => setIsVisible(!isVisible)}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => setIsVisible(!isVisible)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;