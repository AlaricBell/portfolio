import WordAnimation from "../text/WordAnimation";
import TextAnimationUltra from "../text/TextAnimationUltra";
import TextAnimationStrong from "../text/TextAnimationStrong";
import TextAnimationParagraph from "../text/TextAnimationParagraph";

const CardText: React.FC<{title: string,
                          miniTitle: string,
                          content: string,
                          align?: string, 
                          isScrollingUp?: boolean, 
                          isScrollingDown?: boolean}> = ({title, miniTitle, content, align = "text-left", isScrollingUp = false, isScrollingDown = false}) => {
    return (
    <div className={`card card-text card-${align}`} data-aos="fade-up">
      <TextAnimationUltra
          align={align} 
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}>
            {title}
        </TextAnimationUltra>
        <TextAnimationParagraph
          align={align} 
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}>
            {miniTitle}
        </TextAnimationParagraph>
        <TextAnimationStrong
          align={align} 
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}>
            {content}
        </TextAnimationStrong>
      </div>
    )
}

export default CardText;