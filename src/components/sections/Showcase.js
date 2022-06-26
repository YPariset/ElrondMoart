import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/Nfts/collection1/332.png'
import img2 from '../../assets/Nfts/collection1/699.png';
import img3 from '../../assets/Nfts/collection1/549.png';
import img4 from '../../assets/Nfts/collection1/387.png';
import img5 from '../../assets/Nfts/collection1/877.png'

const Section = styled.section`
min-height: 50vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 10em){
    animation-duration: 15s;

  }
}

`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
  border-radius: 20px;
}
`

const Details = styled.div`
display: flex;
justify-content: center;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`


const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}


  return(
    <ImgContainer   onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }  >
      <img width={500} height={400}  src={img} alt="The Moart's" />
      <Details>
        <div>
          <span>Moart's</span> <br />
          <h1>#{number}</h1>
        </div>
      </Details>
    </ImgContainer>
  )
} 


const Showcase = () => {

  const Row1Ref = useRef(null);

  return(
    <Section id="showcase">
    <Row direction="none" ref={Row1Ref}>
      <NftItem img={img1}  number={852} passRef = {Row1Ref} />
      <NftItem img={img2}  number={123} passRef = {Row1Ref} />
      <NftItem img={img3}  number={456} passRef = {Row1Ref} />
      <NftItem img={img4}  number={666} passRef = {Row1Ref} />
      <NftItem img={img5}  number={452} passRef = {Row1Ref} />
    </Row>
    </Section>
  )
}

export default Showcase