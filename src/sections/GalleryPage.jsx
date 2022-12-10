import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useContext, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { MyContext } from '../context/MyContext';


import { motion } from 'framer-motion';

import img01 from '../assets/Images/01.jpg';
import img02 from '../assets/Images/02.jpg';
import img03 from '../assets/Images/03.jpg';
import img04 from '../assets/Images/04.jpg';
import img05 from '../assets/Images/05.jpg';
import img06 from '../assets/Images/06.jpg';
import img07 from '../assets/Images/07.jpg';
import img08 from '../assets/Images/08.jpg';
import img09 from '../assets/Images/09.jpg';
import img10 from '../assets/Images/10.jpg';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
margin: 0 auto;
overfolow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;

position: relative;
`

const Title = styled.h1`
font-size: ${proprs => proprs.theme.fontxxxl};
font-family: 'MuseoModerno';
letter-spacing: -0.4rem;
font-weight: 300;

text-shadow: 1px 1px 1px ${props => props.theme.text};
color: ${props => props.theme.text};
position: absolute;
top: 1rem;
left: 5%;
z-index: 10;
`

const TitleBis = styled.h1`
font-size: ${proprs => proprs.theme.fontxxxl};
font-family: 'MuseoModerno';
font-weight: 400;
letter-spacing: -0.4rem;
-webkit-text-stroke: 1px ${props => props.theme.text};
color: transparent;

position: absolute;
top: 1.5rem;
left: 7%;
z-index: 11;
`
const Left = styled.div`
width: 35%;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
min-height: 100vh; 
z-index: 5;
position: fixed;

left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
    font-size: ${proprs => proprs.theme.fontlg};
    font-weight: 600;
    letter-spacing: 0.4rem;
    width: 80%;
    margin: 0 auto;
}



`
const Right = styled.div`
position: absolute;
left: 35%;
padding-left: 30%;
min-height: 100vh; 

background-color: ${props => props.theme.grey};
/*width: 65%;*/ 
display: flex;
justify-content: flex-start;
align-items: center;

h1{
    width: 5rem;
    margin: 0 2rem;
}
`

const Item = styled(motion.div)`

width: 20rem;
margin-right: 6rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    width: 100%;
    height: auto;
    cursor: pointer;
}
h1{
    font-weight: 500;
    display: inline-block;
    width: fit-content;
    text-align: center;
    cursor: pointer;
}
`

const GallItem = ({img, title = ''}) => {

    return(
        <Item initial={{filter: 'grayscale(100%)'}} whileInView={{filter: 'grayscale(0%)'}} transition={{duration: 0.5}} viewport={{once: false, amount: 'all'}}>
            <img src={img} alt={title}/>
            <h1>{title}</h1>
        </Item>
    )

}

const GalleryPage = () => {

    const {t} = useContext(MyContext);
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const horizontalRef = useRef(null);
    useLayoutEffect(() => {
      let element = ref.current;
      let scrollingElement = horizontalRef.current;
      let pinWrapWidth = scrollingElement.offsetWidth;
      let tl = gsap.timeline();

      setTimeout(() => {
        tl.to(element, {
            
            scrollTrigger: {
              trigger: element,
              start: 'top top',
              end: 'bottom+=100% top-=100%',
              scroller: '.App',
              scrub: true,
              pin: true,
              markers: true,
            },
            height: `${scrollingElement.scrollWidth}px`,
            ease: 'none,',
            
        });
        tl.to(scrollingElement, {
            scrollTrigger: {
                trigger: scrollingElement,
                start:'top top',
                end: 'bottom+=100% top-=100%',
                scrub: 1,
                pin: true,
                markers: true,
            },
            // increasing scrolling height of this section same as the scrolling element width
            x: -pinWrapWidth,
            ease: 'none,',
        });

       
        ScrollTrigger.refresh();
      }, 1000); 
    
      return () => {
        tl.kill();
        ScrollTrigger.kill();
      };
    }, [])
    

  return (
    <Section ref={ref} id='gallery'>
        <Title data-scroll data-scroll-speed="-1">{t('galleryTitle')}</Title>
        <TitleBis data-scroll data-scroll-speed="-1">{t('galleryTitle')}</TitleBis>
        <Left>
        <p>{t('galleryText01')}</p>
        <br/>
        <br/>
        <p>{t('galleryText02')}</p>
        </Left>
        
        <Right ref={horizontalRef}>
            <GallItem img={img04} title="Leaves-Negative"/>
            <GallItem img={img05} title="Bauhaus-Brutalism"/>
            <GallItem img={img03} title="Position"/>
            <GallItem img={img01} title="Architecture"/>
            <GallItem img={img02} title="Glass RoofTop"/>
            <GallItem img={img06} title="Gallery Art"/>
            <GallItem img={img07} title="Brutalism"/>
            <GallItem img={img08} title="Fractal Form"/>
            <GallItem img={img09} title="Pyramid-Louvre"/>
            <GallItem img={img10} title="Fractal Space"/>
        </Right>
    </Section>
  )
}

export default GalleryPage