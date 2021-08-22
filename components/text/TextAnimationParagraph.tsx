const TextAnimationParagraph: React.FC<{children: any,
  align?: string, 
  isScrollingUp?: boolean, 
  isScrollingDown?: boolean}> = ({children, align = "text-left", isScrollingUp = false, isScrollingDown = false}) => {
return (
<p className={`text-primary text-primary-semi-light ${align}  animated ${isScrollingUp ? "animated-up" : ""} ${isScrollingDown ? "animated-down" : ""}`}>
{children}
</p>
)
}

export default TextAnimationParagraph;