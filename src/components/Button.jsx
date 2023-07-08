import React from 'react'
import { AllButton, AllButtonContainer } from '../styles/App.style'

function Button({color, largeText, textColor, buttonLabel}) {

  const alertHandler = () => {
    let userInput = ""
    largeText==="Primary"
    ? alert("버튼을 만들어 보세요")
    : userInput=prompt("어렵나요?")
     console.log(userInput)
  }

  return (
    <AllButtonContainer>
      <AllButton onClick={alertHandler} $size="large" $color={color} $textColor={textColor}>Large {largeText}Button{buttonLabel}</AllButton>
      <AllButton $size="medium" $color={color} $textColor={textColor}>Medium</AllButton>
      <AllButton $size="mini" $color={color} $textColor={textColor}>Small</AllButton>
    </AllButtonContainer>
  )
}

export default Button