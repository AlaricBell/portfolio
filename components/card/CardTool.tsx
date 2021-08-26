const CardTool: React.FC<{children: any, title: string}> = ({children, title}) => {
  return (
    <div className="card-tool" data-aos="fade-up">
      <div className="card-row card-row-icon">
        {children}
      </div>
      <div className="card-row">
        {title}
      </div>
    </div>
  )
}

export default CardTool;