import React from 'react';
import '../components/home.styles.css';
import Arrow from '../components/arrow.svg';
import {motion} from "framer-motion";
const Homepage = () =>{
    return(
<div className='icon'>
< motion.img  animate={{
      scale: [1, 1.5, 1.5, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, .2, 0.5, 0.5, 1],
          repeatDelay: 1
        }}
     src={Arrow}/>



</div>
    )
};

export default Homepage;