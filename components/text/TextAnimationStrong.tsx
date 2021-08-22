const TextAnimationStrong: React.FC<{children: any,
  align?: string, 
  isScrollingUp?: boolean, 
  isScrollingDown?: boolean}> = ({children, align = "text-left", isScrollingUp = false, isScrollingDown = false}) => {
return (
<h2 className={`text-title text-title-light ${align}  animated ${isScrollingUp ? "animated-up" : ""} ${isScrollingDown ? "animated-down" : ""}`}>
{children}
</h2>
)
}

export default TextAnimationStrong;