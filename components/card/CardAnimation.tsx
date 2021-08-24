import TextSecondarySemiLight from "../text/TextSecondarySemiLight";
import TextTitleLight from "../text/TextTitleLight";

const CardAnimation: React.FC<{title: string,
                          date: string}> = ({title, date}) => {
    return (
    <div className={`card card-animation`} data-aos="fade-up">
      <div className="card-title">
        <TextSecondarySemiLight>{date}</TextSecondarySemiLight>
        <TextTitleLight>{title}</TextTitleLight>
      </div>

      <div className="card card-curtain">
        <TextSecondarySemiLight>{date}</TextSecondarySemiLight>
        <TextTitleLight>{title}</TextTitleLight>
        <TextSecondarySemiLight><a>View project</a></TextSecondarySemiLight>
      </div>
    </div>
    )
}

export default CardAnimation;