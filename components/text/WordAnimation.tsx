import { useState, useEffect, useRef } from "react";

const WordAnimation: React.FC<{word: string}> = ({word}) => {
  return (
    <p className="text-animation" data-text={word}>{word}</p>
  )
}

export default WordAnimation;