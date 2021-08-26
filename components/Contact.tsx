import ButtonText from './button/ButtonText';
import TextTitleLight from './text/TextTitleLight';
import TextAnimationUltra from './text/TextAnimationUltra';
import WordAnimation from './text/WordAnimation';
import FormEmail from './form/FormEmail';

const Contact: React.FC<{isScrollingUp: boolean, isScrollingDown: boolean}> = ({isScrollingUp, isScrollingDown}) => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
              <TextAnimationUltra
                align="text-center" 
                isScrollingUp={isScrollingUp ? true : false}
                isScrollingDown={isScrollingDown ? true : false}>
                  Let&apos;s work <WordAnimation word=" together"/>
              </TextAnimationUltra>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6 card-contact" data-aos="fade-up">
            <div className="contact-item">
              <TextTitleLight>Upwork</TextTitleLight>
              <ButtonText path="https://www.upwork.com/freelancers/~01214b59aff89c6e02">Contact me</ButtonText>
            </div>
          </div>

          <div className="col-6 card-contact" data-aos="fade-up">
            <div className="contact-item">
              <TextTitleLight>LinkedIn</TextTitleLight>
              <ButtonText path="https://www.linkedin.com/in/d%C3%A1vid-moln%C3%A1r-a4b8b01a0/">Contact me</ButtonText>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <FormEmail />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;