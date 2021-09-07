const TextTitle: React.FC<{children: any, color: string}> = ({children, color}) => {
  return (
    <h2 className={`text-title text-title-${color}`}>{children}</h2>
  )
}

export default TextTitle;