import React from 'react'
import { AllButton, ModalBackground, ModalContainer, TWoButtonContainer } from '../styles/App.style'

function ButtonModal({$isOpen, $closeModal}) {
  
  return (
    <>
      <ModalBackground $isOpen={$isOpen}/>
      <ModalContainer $isOpen={$isOpen} $closeModal={$closeModal}>
          <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
          <TWoButtonContainer>
            <AllButton $size="mini" $color="rgb(250, 177, 160)" $textColor="rgb(214, 48, 49)" onClick={$closeModal}>닫기</AllButton>
            <AllButton $size="mini" $color="rgb(85, 239, 196)" $textColor="black">확인</AllButton>
          </TWoButtonContainer>
      </ModalContainer>
    </>
  )
}

export default ButtonModal