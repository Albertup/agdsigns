import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Container = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

touch-action: none;
overflow: hidden;

width: 100vw;
height: 100vh;

z-index: 6;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

svg{
    width: 10rem;
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
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
padding-top: 0.5rem;
`

const textVariants = {
    hidden : {opacity:0}, 

    visible : {opacity:1, transition : {duration: 1, yoyo: Infinity, ease: 'easeInOut'}}, // yoyo: infinity, repeats infinite times
    
}
const pathVariants = {
    hidden : {opacity:0, pathLength: 0}, 
    visible : {opacity:1, pathLength: 1, transition : {duration: 2, ease: 'easeInOut'}}, 
    
}

const LoaderComp = () => {
  return (
    <Container initial={{y: 0, opacity: 1}} exit={{y:'100%', opacity: 0}} transition={{duration:2}}>
    {/* <svg
    height="48px"
    width="48px"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    ><g></g>
    <g>
    <motion.path
    variants={pathVariants} initial="hidden" animate="visible"
      d="M763.752 831.475q-27.668-20.06-55.333-40.122-94.275-68.474-188.58-136.906c-10.844-7.847-6.948-7.803-17.518-.14Q383.706 740.293 265.251 826.5c-2.248 1.633-4.573 3.16-6.961 4.805-1.328-2.33.15-4.006.681-5.647q46.416-143.292 93.068-286.507c1.357-4.158.769-6.242-2.828-8.85q-122.667-88.91-245.14-178.09c-.95-.692-1.885-1.404-3.071-2.29 1.688-1.119 3.273-.672 4.73-.674q116.14-.205 232.281-.356c23.526-.035 47.054-.236 70.577-.004 4.403.043 5.92-1.468 7.189-5.396q46.561-144.07 93.384-288.057c.47-1.447.398-3.21 2.22-4.2q19.095 58.697 38.16 117.314 28.53 87.85 56.918 175.747c1.236 3.843 3.138 4.527 6.725 4.53q150.905.106 301.81.398c1.86.003 3.72 0 7.084 0-11.747 8.551-22.286 16.234-32.837 23.9q-106.176 77.147-212.357 154.29c-8.631 6.271-8.626 6.277-5.381 16.279q45.589 140.524 91.173 281.05c.64 1.971 1.221 3.96 1.83 5.941l-.754.792ZM311.686 930.917l12.464 38.42c.087.27.167.541.25.812l-.103.109-7.564-5.485q-12.887-9.36-25.78-18.715c-1.482-1.073-.949-1.067-2.394-.02q-16.214 11.755-32.407 23.54c-.308.223-.626.431-.952.656-.181-.318.02-.547.093-.772q6.345-19.588 12.723-39.165l8.713-26.747q6.365-19.695 12.765-39.378c.065-.198.055-.439.304-.574l5.216 16.037q3.9 12.01 7.78 24.025ZM504.185 948.518q12.904 9.337 25.78 18.715 3.78 2.746 7.563 5.485l.103-.108c-.083-.271-.162-.543-.25-.812q-6.23-19.21-12.463-38.42l-8.892-27.258q-3.866-12.02-7.78-24.024-2.604-8.017-5.217-16.037c-.249.135-.24.376-.303.574q-6.392 19.686-12.766 39.377l-8.713 26.747ZM390.85 946.05q-16.215 11.754-32.408 23.539c-.307.223-.625.432-.952.657-.181-.319.02-.548.094-.772q6.345-19.588 12.722-39.166l8.713-26.746q6.365-19.695 12.766-39.378c.064-.198.054-.439.303-.574l5.217 16.037q3.9 12.009 7.78 24.024c.17.526.43.62.92.62q20.628.014 41.257.054h.968c-1.605 1.169-3.046 2.22-4.488 3.267l-29.03 21.092ZM598.117 945.122q12.904 9.338 25.78 18.716 3.779 2.745 7.563 5.484l.103-.108c-.083-.27-.162-.543-.25-.812q-6.23-19.21-12.463-38.42c-.444-1.367-.445-1.368.735-2.225l29.03-21.092c1.442-1.048 2.883-2.098 4.488-3.267h-.968q-20.629-.032-41.258-.054c-.49 0-.75-.094-.919-.62q-3.866-12.02-7.78-24.024-2.604-8.017-5.217-16.037c-.25.135-.24.376-.303.574q-6.392 19.686-12.766 39.378l-8.713 26.746ZM690.027 929.361q-6.386 19.575-12.723 39.166c-.072.224-.274.453-.093.772.327-.225.644-.434.952-.657q16.202-11.771 32.407-23.539c1.445-1.047.913-1.053 2.395.02q12.904 9.337 25.779 18.715 3.78 2.745 7.564 5.484l.103-.108c-.083-.27-.163-.543-.25-.812l-12.463-38.42c-.444-1.367-.445-1.368.735-2.225l29.03-21.092c1.442-1.048 2.882-2.098 4.488-3.267h-.968q-20.629-.032-41.258-.054c-.49 0-.75-.094-.919-.62q-3.867-12.02-7.78-24.024-2.604-8.017-5.217-16.037c-.25.135-.24.376-.304.574q-6.391 19.686-12.765 39.378Z"
    />
    </g></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="none"><g> </g><g><motion.path variants={pathVariants} initial="hidden" animate="visible" d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>  
        <Text variants={textVariants} initial="hidden" animate="visible">
            AGDsigns
        </Text>
    </Container>
  )
}

export default LoaderComp