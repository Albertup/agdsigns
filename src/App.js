import React, { useEffect, useState } from 'react';
import { MyContext } from './context/MyContext';
import { useTranslation } from "react-i18next"
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import HomePage from './sections/HomePage'
import { AnimatePresence } from "framer-motion";
import AboutPage from "./sections/AboutPage";
// import GalleryPage from './sections/GalleryPage';
import ScrollTriggerComp from './components/ScrollTriggerComp';
import BannerPage from './sections/BannerPage';
import FooterPage from './sections/FooterPage';
import LoaderComp from './components/LoaderComp';
// import NewsPage from './sections/NewsPage';
// import GalleryPage02 from './sections/GalleryPage02';



function App() {

  const containerRef = useRef(null);


  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, [])
  


  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
  i18n.changeLanguage(code)
  }

  return (
    <>
      <MyContext.Provider value={{t, changeLanguaje}}> 
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={
          {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
          }
          }
          watch={
          [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
          }
          containerRef={containerRef}
          >
          <AnimatePresence>
            {loader ? null : <LoaderComp/>}
          </AnimatePresence>
          <ScrollTriggerComp/>
          <AnimatePresence>
            <main className='App' data-scroll-container ref={containerRef}>
            <HomePage/>
            <AboutPage/>
            {/* <GalleryPage/> */}
            <BannerPage/>
            {/* <NewsPage/> */}
            <FooterPage/>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
      </MyContext.Provider> 
    </>
  );
}

export default App;
