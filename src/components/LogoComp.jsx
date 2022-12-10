import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Container = styled.div`
position: absolute;
top: 1rem;
left: 1rem;

width: 100%;
color: ${props => props.theme.text};
z-index: 5;

a{
    display:flex;
    align-items: flex-end;
}

svg{
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-lincap: round;
    g{
        path{
            stroke: ${props => props.theme.text};
        }
    }
}
`

const Text = styled(motion.span)`
font-family: 'MuseoModerno';
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.text};
padding-bottom: 0.5rem;
`

const textVariants = {
    hidden : {opacity:0, x: -50}, 
    visible : {opacity:1, x: -5, transition : {duration: 2, delay: 5, ease: 'easeInOut'}}, //delay: 2
    
}

const pathVariants = {
    hidden : {opacity:0, pathLength: 0}, 
    visible : {opacity:1, pathLength: 1, transition : {duration: 2, delay: 3, ease: 'easeInOut'}}, //delay: 5,
    
}

const LogoComp = () => {
  return (
    <Container>
        <Link to="/">
        {/* <svg
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        width="48px"
        height="48px" 
        fill="none"
        >
        
        <g><motion.path 
        variants={pathVariants} initial="hidden" animate="visible"
        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8Zm0 481.61C118.981 489.61 14.39 385.018 14.39 256S118.982 22.39 248 22.39 481.61 126.982 481.61 256 377.018 489.61 248 489.61Z" /></g>
        <g><motion.path 
        variants={pathVariants} initial="hidden" animate="visible"
        d="M279.006 359.935A64.5 64.5 0 0 0 183.5 416.5a65.175 65.175 0 0 0 .377 6.938 64.5 64.5 0 1 0 95.13-63.503ZM248 468a51.497 51.497 0 1 1 51.5-51.5A51.467 51.467 0 0 1 248 468Z" /></g>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="none"><g> </g><g><motion.path variants={pathVariants} initial="hidden" animate="visible" d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>  
        <Text variants={textVariants} initial="hidden" animate="visible">
            AGDsigns
        </Text>
        </Link>
    </Container>
  )
}

export default LogoComp