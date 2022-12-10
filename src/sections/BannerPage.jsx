import React, { useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../context/MyContext'

const Section = styled.div`
min-height: 100vh;
width: 80vw;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

position: relative;
`

const Container = styled.div`
min-height: 100vh;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`

const BannerComponent = styled.h1`
font-size: ${proprs => proprs.theme.fontxxxl};
font-family: 'MuseoModerno';
color: ${props => props.theme.text};
white-space: nowrap;
letter-spacing: -0.4rem;
font-weight: 300;
text-transform: uppercase;
line-height: 1;

span{
  display: block;
  background-color: ${props => props.theme.body};
  padding: 1rem 2rem;
}
`

const BannerPage = () => {
  const {t} = useContext(MyContext);

  return (
    <Section>
        <Container id="up">
            <BannerComponent>
               <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-target="#up">{t('banner01')}</span> 
            </BannerComponent>
            <BannerComponent>
               <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">{t('banner02')}</span> 
            </BannerComponent>
            <BannerComponent>
               <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">{t('banner03')}</span> 
            </BannerComponent>
            <BannerComponent>
               <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#up">{t('banner04')}</span> 
            </BannerComponent>
            <BannerComponent>
               <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">{t('banner05')}</span> 
            </BannerComponent>
        </Container>
    </Section>
  )
}

export default BannerPage