import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEnvelope,         
  } from "@fortawesome/free-solid-svg-icons";

const FormEmail: React.FC = () => {
    return (
        <form className="form-contact" data-aos="fade-up" autoComplete="off">
            <div className="input-group input-text">
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder="What's your name?"/>
            </div>

            <div className="input-group input-text">
                <label htmlFor="name">Your Email</label>
                <input autoComplete="off" type="email" placeholder="What's your email?"/>
            </div>

            <div className="input-group input-select">
                <label htmlFor="name">Service</label>
                <select name="subject" id="subject">
                    <option value="front-end" className="default" selected disabled>Select service</option>
                    <option value="front-end">Front-end job</option>
                    <option value="front-end">Back-end job</option>
                    <option value="front-end">Full-stack job</option>
                    <option value="front-end">Wordpress job</option>
                    <option value="front-end">Hire me full-time</option>
                    <option value="front-end">Bug fix</option>
                    <option value="front-end">Need help with a project</option>
                </select>
            </div>

            <div className="input-group input-select">
                <label htmlFor="name">Budget</label>
                <select name="subject" id="subject">
                    <option value="front-end" className="default" selected disabled>Select budget</option>
                    <option value="front-end">50$ - 100$</option>
                    <option value="front-end">100$ - 500$</option>
                    <option value="front-end">500$ - 1000$</option>
                    <option value="front-end">1000$ - 2000$</option>
                    <option value="front-end">2000$ - 5000$</option>
                    <option value="front-end">5000$ or more</option>
                </select>
            </div>

            <div className="input-group input-textarea">
                <label htmlFor="name">Your Message</label>
                <textarea name="" id="" rows={1} placeholder="What's your message?"></textarea>
            </div>

            <button type="submit" className="btn-submit"><FontAwesomeIcon icon={faEnvelope} style={{width: '18px', height: '18px'}}/> Send</button>
        </form>
    )
}

export default FormEmail;