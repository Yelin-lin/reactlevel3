import React from 'react'
import { ModalBackground, ModalContainer, XMarkButton } from '../styles/App.style'
import { XMarkIcon } from '../components/Icons'

function OverlayModal({$isOpen, $closeModal}) {

  return (
    <>
        <ModalBackground  $isOpen={$isOpen} onClick={$closeModal}/>
        <ModalContainer $isOpen={$isOpen} $closeModal={$closeModal}>
            <div>닫기 버튼 1개가 있고, <br/> 외부 영역을 누르면 모달이 닫혀요.</div>
            <XMarkButton onClick={$closeModal}>
                {XMarkIcon}
            </XMarkButton>
        </ModalContainer>
    </>
  )
}

export default OverlayModal