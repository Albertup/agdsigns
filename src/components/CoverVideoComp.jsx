import React, { useContext } from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/city-night.mp4';
import { motion } from 'framer-motion'; 
import { MyContext } from '../context/MyContext';

const VideoContainer = styled.section` 
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`

const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`

const Title = styled(motion.div)`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

div {
    display: flex;
    flex-direction: row;
}


h1{
    font-family: 'MuseoModerno';
    text-decoration: 1rem underline;
    font-weight: 400;
    letter-spacing: -0.4rem;
    -webkit-text-stroke: 1px ${props => props.theme.text};
    color: transparent;
    font-size: ${props => props.theme.fontBig};
    ${'' /* text-shadow: 1px 1px 1px ${props => props.theme.body}; */}
}
h2{
    font-family: 'Wire One';
    font-weight: 100;
    letter-spacing: 0.5rem;
    margin-top: -4vh;
    font-size: ${props => props.theme.fontxl};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
}
`

const container = {
    hidden : {opacity:0}, 
    show : {opacity:1, transition: {delayChildren: 5, staggerChildren: 0.3}}, //delayChildren: 2
    
}
const item = {
    hidden : {opacity:0}, 
    show : {opacity:1}     
}

const text = {
    hidden : {opacity:0}, 
    show : {opacity:1}     
}


const CoverVideoComp = () => {
    const {t} = useContext(MyContext);
  return (
    <VideoContainer>
        <DarkOverlay/>
        <Title variants={container} initial="hidden" animate="show">
            <div>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed='4'>AG</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.10' data-scroll-speed='4'>D</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.8' data-scroll-speed='4'>s</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.6' data-scroll-speed='4'>i</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.4' data-scroll-speed='4'>g</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.2' data-scroll-speed='4'>n</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.1' data-scroll-speed='4'>s</motion.h1>
            </div>
                <motion.h2 variants={text} data-scroll data-scroll-delay='0.4' data-scroll-speed='2'>{t('inspire')}</motion.h2>
        </Title>
        <video playsInline autoPlay muted loop><source src={MainVideo} type="video/mp4"></source></video>
    </VideoContainer>
  )
}

export default CoverVideoComp