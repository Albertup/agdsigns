import { motion } from 'framer-motion';
import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

import Logo from '../assets/Svgs/star_white_48dp.svg';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
margin: 5rem auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

position: relative;
`

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 10vw;
    height: auto;
}
h3{
    font-size: ${props => props.theme.fontxl};
    font-family: 'MuseoModerno';
    text-decoration: 1px underline;
    font-weight: 400;
    letter-spacing: 0.1rem;
    -webkit-text-stroke: 0.3px ${props => props.theme.text};
    color: transparent;
    
}
`

const FooterComponent = styled(motion.footer)`
width: 80vw;

ul{
    list-style: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${props => props.theme.text}; 
    border-bottom: 1px solid ${props => props.theme.text}; 
}

li{
    padding: 2rem;
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transiton: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
}
`

const Bottom = styled.div`
padding: 0.5rem 0;
margin: 0 4rem;
font-size: ${props => props.theme.fontlg};

display: flex;
    justify-content: space-between;
    align-items: center;
a{
    text-decoration: underline;  
}
`

const FooterPage = () => {

    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);
        scroll.scrollTo(elem, {
            offset: '-100',
            duration: '2000',
            easing: [0.25,0.0,0.35,1.0]
        }
            );
    }

  return (
    <Section>
        <LogoContainer>
            <img data-scroll data-scroll-speed="2" src={Logo} alt="AGDsigns"/>
            <h3 data-scroll data-scroll-speed="-1">AGDsigns</h3>
        </LogoContainer>
        <FooterComponent initial={{y: "-400px"}} whileInView={{y: 0}} viewport={{once: false}} transition={{duration:1.5 }}>
            <ul>
                <li onClick={() => handleScroll('#home')}>home</li>
                <li onClick={() => handleScroll('.about')}>about</li>
                <li onClick={() => handleScroll('#gallery')}>gallery</li>
                <li onClick={() => handleScroll('#news')}>news</li>
                <li><a href="http://google.com" target="_blank" rel="noreferrer">look book</a></li>
                <li><a href="http://google.com" target="_blank" rel="noreferrer">reviews</a></li>
            </ul>
            <Bottom>
                <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
                <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Made with &hearts; by &nbsp;<a href="http://google.com" target="_blank" rel="noreferrer">AGDsigns</a></span>
            </Bottom>
        </FooterComponent>
    </Section>
  )
}

export default FooterPage