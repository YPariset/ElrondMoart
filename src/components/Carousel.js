import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



import { Pagination, Navigation, Autoplay } from "swiper";

import img1 from '../assets/Nfts/collection1/11.JPG';
import img2 from '../assets/Nfts/collection1/6.png';
import img3 from '../assets/Nfts/collection1/20.png'
import img4 from '../assets/Nfts/collection1/1.png';
import img5 from '../assets/Nfts/collection1/14.png'
import img6 from '../assets/Nfts/collection1/853.png';
import img7 from '../assets/Nfts/collection1/699.png';
import img8 from '../assets/Nfts/collection1/877.png';
import img9 from '../assets/Nfts/collection1/310.png';
import img10 from '../assets/Nfts/collection1/387.png';

import Arrow from '../assets/Arrow.svg';


const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em){
    height: 60vh;
}

@media (max-width: 64em){
    height: 50vh;
    width: 30vw;
}
@media (max-width: 48em){
    height: 50vh;
    width: 40vw;
}
@media (max-width: 30em){
    height: 45vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        display: block;
        width: 90%;
        height: auto;
        object-fit: cover;
        border-radius: 50px;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 85%;
    margin-top: 1em;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 85%;
    width: 4rem;
    margin-top: 1em;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }


}

`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true
        }}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        grabCursor={true}
        
        className="mySwiper"
      >
        <SwiperSlide>  <img width={500} height={400}  src={img1} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img2} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img3} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img4} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img5} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img6} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img7} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img8} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img9} alt="The Moart's" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={img10} alt="The Moart's" />   </SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel