const ButtonPrimary: React.FC<{children: any, path: string, download: boolean}> = ({children, path, download = false}) => {
  if(download) {
    return (
      <a href={path} className="btn btn-primary" download>{children}</a>
    )
  } else {
    return (
      <a href={path} className="btn btn-primary" target="_blank">{children}</a>
    )
  }
}

export default ButtonPrimary;