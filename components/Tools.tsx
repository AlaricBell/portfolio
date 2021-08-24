import TableTools from './table/TableTools';
import TextAnimationUltra from './text/TextAnimationUltra';
import WordAnimation from './text/WordAnimation';

const Projects: React.FC<{isScrollingUp: boolean, isScrollingDown: boolean}> = ({isScrollingUp, isScrollingDown}) => {

  return (
    <section id="tools">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <TextAnimationUltra
                align="text-center" 
                isScrollingUp={isScrollingUp ? true : false}
                isScrollingDown={isScrollingDown ? true : false}>
                  These are the <WordAnimation word=" technologies "/> I am working with.
              </TextAnimationUltra>
          </div>

          <div className="col-12">
            <TableTools />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;