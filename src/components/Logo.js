import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo-EM.png'

const LogoContainer = styled.div`
transition: all 0.2s ease;
width: auto;

&:hover{
    transform: scale(1.1);
}

img{
  justify-content: start;
  width: 250px;
  height: auto;
  background-color: transparent;
}

@media (max-width: 64em) {
 
  img{
    justify-content: start;
    width: 500px;
    height: auto;
    background-color: transparent;
  }
  
  }
`

const Logo = () => {
  return (
    <LogoContainer>
        <Link to="/">
        <img src={logo} alt={"logo"} />
        </Link>
    </LogoContainer>
  )
}

export default Logo