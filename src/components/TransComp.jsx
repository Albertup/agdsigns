import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { MyContext } from '../context/MyContext';
import { EnFlag, EsFlag } from '../styles/AllSvgs';

const Translators = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
top: -0.5rem;
right: 2rem;
color: ${props => props.theme.text};
z-index: 6;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
cursor: pointer;
`
const LineTop = styled(motion.span)`
width: 2px;
height: 4.5rem;
background-color: ${props => props.theme.text};

`

const iconVariants = {
  hidden : {opacity:0, pathLength: 0}, 
  visible : {opacity:1, pathLength: 1, transition : {duration: 6, ease: 'easeInOut'}}, 
  
}

const TransComp = () => {

    const {changeLanguaje}=useContext(MyContext);

  return (
    <div>
        <Translators>
          <LineTop variants={iconVariants} initial="hidden" animate="visible"/>
          <motion.div variants={iconVariants} initial="hidden" animate="visible" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><EsFlag width={20} height={20} fill='currentColor' onClick={()=>changeLanguaje('es')}/></motion.div>
          <motion.div variants={iconVariants} initial="hidden" animate="visible" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><EnFlag width={20} height={20} fill='currentColor' onClick={()=>changeLanguaje('en')}/></motion.div>
        </Translators>
    </div>
  )
}

export default TransComp