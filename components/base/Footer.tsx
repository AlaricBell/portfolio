import TextPrimaryLight from "../text/TextPrimaryLight"
import TextSecondarySemiLight from "../text/TextSecondarySemiLight"
import TextSecondaryLight from "../text/TextSecondaryLight"

const Footer: React.FC = props => {
    return (
        <footer>
            <div className="container"> 


                <div className="footer-items"> 
                    <div className="footer-item footer-email">
                        <TextPrimaryLight>Contact me</TextPrimaryLight>
                        <hr className="line-separator"/>
                        <TextSecondaryLight>alaric.bell@gmail.com</TextSecondaryLight>
                        <TextSecondarySemiLight>Feel free to reach out to me, I prefer communication via email since we might be a few time zones away</TextSecondarySemiLight>
                    </div>

                    <div className="footer-item">
                        <TextPrimaryLight>Availability</TextPrimaryLight>
                        <hr className="line-separator"/>
                        <TextSecondarySemiLight>I'm always working on something but I gladly discuss new opportunities</TextSecondarySemiLight>
                    </div>

                    <div className="footer-item">
                        <TextPrimaryLight>Follow me</TextPrimaryLight>
                        <hr className="line-separator"/>
                        <ul>
                            <li><TextSecondarySemiLight>Upwork</TextSecondarySemiLight></li>
                            <li><TextSecondarySemiLight>LinkedIn</TextSecondarySemiLight></li>
                            <li><TextSecondarySemiLight>Twitter</TextSecondarySemiLight></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-items"> 
                    <p className="copy">&copy; 2021 Molnár Dávid. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;