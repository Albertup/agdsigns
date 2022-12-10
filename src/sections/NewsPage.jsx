import { motion } from 'framer-motion'
import React, { useContext, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { MyContext } from '../context/MyContext'

import img11 from '../assets/Images/11.jpg';
import img12 from '../assets/Images/12.jpg';
import img13 from '../assets/Images/13.jpg';
import img14 from '../assets/Images/14.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

position: relative;

/*background-color: yellow;*/
`
const Overlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 90vh;


box-shadow: 0 0 0 4vw ${props =>props.theme.text};
border: 3px solid ${props => props.theme.body};

z-index: 11;
`

const Title = styled.h1`
font-size: ${proprs => proprs.theme.fontxxxl};
font-family: 'MuseoModerno';
letter-spacing: -0.4rem;
font-weight: 300;

text-shadow: 1px 1px 1px ${props => props.theme.body};
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
-webkit-text-stroke: 1px ${props => props.theme.body};
color: transparent;

position: absolute;
top: 1.5rem;
left: 7%;
z-index: 11;
`

const Text = styled.div`
font-size: ${proprs => proprs.theme.fontlg};
width: 20%;
font-weight: 600;
letter-spacing: 0.4rem;
position: absolute;
padding: 2rem;
top: 0;
right: 0;
z-index: 11;
`

const Container = styled.div`
position: absolute;
top: 0%;;
left: 50%;
transform: translate(-50%, 0);
width: 25vw;
height: auto;

 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Item = styled(motion.div)`

width: 20rem;
margin-right: 6rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem 0;
img{
    width: 100%;
    height: auto;
    cursor: pointer;
    z-index: 5;
}
`

const GallItem = ({img, title = ''}) => {

    return(
        <Item>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
        </Item>
    )

}



const NewsPage = () => {
    const {t} = useContext(MyContext);
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const ScrollingRef = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = ScrollingRef.current;
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
              ease: 'none,',
          });
          tl.fromTo(scrollingElement, 
            {
                y:'0',
            },
            {
                y:'-100',
              scrollTrigger: {
                  trigger: scrollingElement,
                  start:'top top',
                  end: 'bottom top',
                  scrub: 1,
                  pin: true,
                  markers: true,
              },
              // increasing scrolling height of this section same as the scrolling element width
              
          });
  
         
          ScrollTrigger.refresh();
        }, 1000); 
      
        return () => {
          tl.kill();
          ScrollTrigger.kill();
        };
      }, [])
      

  return (
    <Section ref={ref} id='news'>
    <Overlay/>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">{t('newsTitle')}</Title>
        <TitleBis data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">{t('newsTitle')}</TitleBis>

        <Container ref={ScrollingRef}>
            <GallItem img={img11} title="Leaves-Negative"/>
            <GallItem img={img12} title="Bauhaus-Brutalism"/>
            <GallItem img={img13} title="Position"/>
            <GallItem img={img14} title="Architecture"/>
            
        </Container>


        <Text data-scroll data-scroll-speed="-4">
        {t('newsText01')}
        <br/>
        <br/>
        {t('newsText02')}
        <br/>
        <br/>
        {t('newsText03')}
        </Text>
    </Section>
  )
}

export default NewsPage