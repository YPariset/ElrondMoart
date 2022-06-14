import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/GIF MOARTS V2.gif'


const VideoContainer = styled.div`
width: 100%;
background-color: transparent;

img{
    width: 100%;
    height: auto;
    background-color: transparent;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <img src={GIF} alt={"gif"} />
    </VideoContainer>
  )
}

export default CoverVideo