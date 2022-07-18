import React, { useState } from "react";
import Modal from "styled-react-modal";
import img from '../assets/BuyTwoGetThree.JPG'
import styled from 'styled-components'
import Close from "./Icons/Close";


const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: right;
  opacity: ${(props) => props.opacity};
  background-image: url(${img});
  background-size: contain;
  transition : all 0.3s ease-in-out;`;



function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(true);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <div>
        <button onClick={toggleModal}>✕</button>
        </div>
      </StyledModal>
    </div>
  );
}

export default FancyModalButton