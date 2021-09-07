const TextPrimary: React.FC<{children: any, color: string}> = ({children, color}) => {
  return (
    <p className={`text-primary text-primary-${color}`}>{children}</p>
  )
}

export default TextPrimary;