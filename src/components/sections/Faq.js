import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE SUPPLY ?" >
  Elrond Moart's is a collection of 6209 NFT that will be devided in several drop 
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHO ARE MOART'S TEAM ?" >
  Moart’s team is a group of close friends who know each of them since long time now. They are 6 in the team, including the 2 founders, 2 designer, 1 dev, and the VitalNetwork founder.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW MANY DROP ?" >
  A total of 7 drops of 887 Moart's, 887 is related to the number of Moai on the Rapa nui island  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE 1ST DROP PRICE ?" >
First drop price is 0.6 egld for the Private Sale and 0.8 Egld for the Public Sale  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT ARE MOART'S USECASE?
" >
Moart’s will bring several benefits, you will be able to stake them to earn passive Income, you’ll be able to buy a physical reproduction of your NFT. And more than that your NFT will be the proof that you participated in a charitable cause.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq