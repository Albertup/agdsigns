import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { MyContext } from '../context/MyContext';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const NavContainer = styled(motion.div)`

font-weight: 600;
letter-spacing: 0.5rem;
width: 100vw;
z-index: 6;
position: absolute;
top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};

display: flex;
justify-content: center;
align-items: center;

transition: all 0.3s ease;
`

const MenuItems = styled(motion.ul)`
position: relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding: 0 10rem;
`

const MenuBtn = styled(motion.li)`
background-color: ${props => `rgba(${props.theme.textRgba},0.7)`};
list-style-type: style none;
text-decoration: none;
color: ${props => props.theme.body};
width: 15rem;
height: 2.5rem; 

clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);

position: absolute;
top: 100%;
left: 50%;
transform: translatex(-50%);
font-size: ${props => props.theme.fontlg};
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
` 


const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${props => props.theme.text};
cursor: pointer;
`



const NavBarComp = () => {
    const {t} = useContext(MyContext);
    const [click, setClick] = useState(false);

    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);
        setClick(!click);
        scroll.scrollTo(elem, {
            offset: '-100',
            duration: '2000',
            easing: [0.25,0.0,0.35,1.0]
        }
            );
    }

  return (
    <NavContainer click={click} initial={{y: '-100%'}} animate={{y: 0}} transition={{duration: 5, delay: 5}}> 
        <MenuItems drag="y" dragConstraints={{top: 0, bottom: 70}} dragElastic={0.05} dragSnapToOrigin>
            <MenuBtn onClick={() => setClick(!click)}>{t('menu')}</MenuBtn>
            <MenuItem onClick={() => handleScroll('#home')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, Y: 0}}>Home</MenuItem>
            <MenuItem onClick={() => handleScroll('.about')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, y: 0}}>About</MenuItem>
            <MenuItem onClick={() => handleScroll('#gallery')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, y: 0}}>Gallery</MenuItem>
            <MenuItem onClick={() => handleScroll('#ews')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, y: 0}}>News</MenuItem>
        </MenuItems>
    </NavContainer>// delay: 2
  )
}

export default NavBarComp