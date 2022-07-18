import React, { useState } from "react";
import Modal from "styled-react-modal";
import img from '../assets/BuyTwoGetThree.JPG'
import styled from 'styled-components'
import Close from "./Icons/Close";
import Button from "./Button";


const StyledModal = Modal.styled`
  width: 28rem;
  height: 28rem;
  opacity: ${(props) => props.opacity};
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.text};
  transition : all 0.3s ease-in-out;`;

  const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  align-item: center;`;

  const CloseStyled = styled.a`
  padding-right: 5px;
  padding-top: 2px;
  cursor: pointer;`;

  const ImgStyled = styled.img`
  border-radius: 30px`;

  const CloseContainer = styled.div`
  display: flex;
  justify-content: right;`;

  const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  `;


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
        <CloseContainer>
        <CloseStyled onClick={toggleModal}>✕</CloseStyled>
        </CloseContainer>
        <ImgContainer>
        <ImgStyled src={img} alt="Event" width="300" height="300"></ImgStyled>
        </ImgContainer>
        <ButtonContainer>
        <Button text="BUY NOW" link="https://vitalnetwork.io/launchpad"></Button>
        </ButtonContainer>
      </StyledModal>
    </div>
  );
}

export default FancyModalButton