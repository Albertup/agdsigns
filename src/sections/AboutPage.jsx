import React, { useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../context/MyContext';

import img01 from '../assets/Images/01.jpg'
import img02 from '../assets/Images/02.jpg'
import img03 from '../assets/Images/03.jpg'


const Section = styled.div`
position: relative;
min-height: 100vh;
width: 80vw;
display: flex;
margin: 0 auto;
`

const Title = styled.h1`
font-size: ${proprs => proprs.theme.fontBig};
font-family: 'MuseoModerno';
letter-spacing: -0.4rem;
font-weight: 300;

position: absolute;
top: 1rem;
left: 5%;
z-index: 5;
`

const TitleBis = styled.h1`
font-size: ${proprs => proprs.theme.fontBig};
font-family: 'MuseoModerno';
font-weight: 400;
letter-spacing: -0.4rem;
-webkit-text-stroke: 1px ${props => props.theme.body};
color: transparent;

position: absolute;
top: 1.5rem;
left: 7%;
z-index: 6;
`

const Left = styled.div`
font-size: ${proprs => proprs.theme.fontlg};
width: 50%;
font-weight: 600;
letter-spacing: 0.4rem;
position: relative;
z-index: 5;
margin-top: 20%;
`
const Right = styled.div`
width: 50%;
position: relative;

img{
    width: 100%;
    height: auto;
}

.small-img-01{
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 5%;
}
.small-img-02{
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
}
`

const AboutPage = () => {
    const {t} = useContext(MyContext);
  return (
    <Section id="fixed-target" className='about'>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        {t('aboutTitle')}
        </Title>
        <TitleBis data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        {t('aboutTitle')}
        </TitleBis>
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        {t('aboutText01')}
        <br/>
        <br/>
        {t('aboutText02')}
        <br/>
        <br/>
        {t('aboutText03')}
        </Left>
        <Right>
            <img src={img01}  alt="About Us 01"/>
            <img data-scroll data-scroll-speed="5" src={img02} className="small-img-01" alt="About Us 01"/>
            <img data-scroll data-scroll-speed="-2" src={img03} className="small-img-02" alt="About Us 01"/>
        </Right>
    </Section>
  )
}

export default AboutPage