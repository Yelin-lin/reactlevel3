import React, { useState } from 'react'
import { AllButton, AllButtonContainer } from '../styles/App.style'
import ButtonModal from './ButtonModal';
import OverlayModal from './OverlayModal';

function Modals() {
    const [buttonModalOpen, setButtonModalOpen] = useState(false);

    const openButtonModal = () => setButtonModalOpen(true);
    const closeButtonModal = () => setButtonModalOpen(false);

    const [overlayModalOpen, setOverLayModalOpen] = useState(false);

    const openOverLayModal = () => setOverLayModalOpen(true);
    const closeOverLayModal = () => setOverLayModalOpen(false)

  return (
    <>
        <h1>Modals</h1>
        <AllButtonContainer>
          <div>
              <AllButton $size="mini" $color="rgb(85, 239, 196)" $textColor="black" onClick={openButtonModal}>open modal</AllButton>
              <ButtonModal $isOpen={buttonModalOpen} $closeModal={closeButtonModal} />
          </div>

          <div>
            <AllButton $size="large" $color="rgb(250, 177, 160)" $textColor="rgb(214, 48, 49)" onClick={openOverLayModal}>open modal</AllButton>
            <OverlayModal $isOpen={overlayModalOpen} $closeModal={closeOverLayModal} />
          </div>
        </AllButtonContainer>
    </>
  )
}

export default Modals