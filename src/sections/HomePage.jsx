import React from 'react'
import styled from 'styled-components'
import CoverVideoComp from '../components/CoverVideoComp'
import LogoComp from '../components/LogoComp'
import NavBarComp from '../components/NavBarComp'
import TransComp from '../components/TransComp'


const Section = styled.div`
position: relative;
min-height: 100vh;
overflow: hidden;

`

const HomePage = () => {
  return (
    <Section id='home'>
      <TransComp/>
      <CoverVideoComp/>
      <LogoComp/>
      <NavBarComp/>
    </Section>
  )
}

export default HomePage