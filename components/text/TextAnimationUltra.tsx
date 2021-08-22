const TextAnimationUltra: React.FC<{children: any,
                               align?: string, 
                               isScrollingUp?: boolean, 
                               isScrollingDown?: boolean}> = ({children, align = "text-left", isScrollingUp = false, isScrollingDown = false}) => {
  return (
    <p className={`text-ultra ${align}  animated ${isScrollingUp ? "animated-up" : ""} ${isScrollingDown ? "animated-down" : ""}`}>
      {children}
    </p>
  )
}

export default TextAnimationUltra;