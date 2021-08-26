import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEnvelope,         
  } from "@fortawesome/free-solid-svg-icons";

import emailjs from 'emailjs-com';

const FormEmail: React.FC = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ihq7xc3', 'template_p8yquql', e.target, 'user_WHhhEOzYToH3JKxPzKHzS');
        e.target.reset();
    }

    return (
        <form className="form-contact" data-aos="fade-up" autoComplete="off" onSubmit={sendEmail}>
            <div className="input-group input-text">
                <label htmlFor="input-name">Your Name</label>
                <input name="name" id="input-name" autoComplete="off" type="text" placeholder="What's your name?"/>
            </div>

            <div className="input-group input-text">
                <label htmlFor="input-email">Your Email</label>
                <input name="email" id="input-email" autoComplete="off" type="email" placeholder="What's your email?"/>
            </div>

            <div className="input-group input-select">
                <label htmlFor="input-subject">Service</label>
                <select name="subject" id="input-subject">
                    <option value="not selected" className="default" selected disabled>Select service</option>
                    <option value="front-end job">Front-end job</option>
                    <option value="back-end job">Back-end job</option>
                    <option value="full-stack job">Full-stack job</option>
                    <option value="wordpress job">Wordpress job</option>
                    <option value="full-time job">Hire me full-time</option>
                    <option value="bug fix job">Bug fix</option>
                    <option value="need help job">Need help with a project</option>
                </select>
            </div>

            <div className="input-group input-select">
                <label htmlFor="input-budget">Budget</label>
                <select name="budget" id="input-budget">
                    <option value="not selected" className="default" selected disabled>Select budget</option>
                    <option value="50$-100$">50$ - 100$</option>
                    <option value="100$-500$">100$ - 500$</option>
                    <option value="500$-1000$">500$ - 1000$</option>
                    <option value="1000$-2000$">1000$ - 2000$</option>
                    <option value="2000$-5000$">2000$ - 5000$</option>
                    <option value="5000$ or more">5000$ or more</option>
                </select>
            </div>

            <div className="input-group input-textarea">
                <label htmlFor="input-message">Your Message</label>
                <textarea name="message" id="input-message" rows={1} placeholder="What's your message?"></textarea>
            </div>

            <button type="submit" className="btn-submit"><FontAwesomeIcon icon={faEnvelope} style={{width: '18px', height: '18px'}}/> Send</button>
        </form>
    )
}

export default FormEmail;