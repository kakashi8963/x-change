import react from 'react';
import {motion} from "framer-motion";
import {useState} from 'react';

const variants = {
    open: { opacity: 1, x: 0 ,transition:5},
closed:{ opacity: 0, x: "-100% "}
  }

const Header =()=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
<div>
<motion.nav  className="navbar navbar-dark bg-dark">
  < motion.a animate={{scale:1.3,x:0, rotate: 360 }}
    transition={{ duration: 2}}  style={{ rotate: 0, x: "calc(50vh - 100px)" }} className="navbar-brand" href="#" >3-Arrow</motion.a>

   <motion.a animate={{y:[-12,12,0], x:280}} transition={{ duration: 4}} className=" nav-link active" href="#">Home </motion.a>
   <motion.a animate={{y:[-12,12,0],x:190}} transition={{ duration: 4}} className=" nav-link active" href="#">Sign-In </motion.a>
   <motion.a animate={{y:[-12,12,0] ,x:90}} transition={{ duration: 4}} className="nav-link active" href="#">Features</motion.a>
  <motion.button  onClick={() => setIsOpen(isOpen => !isOpen)}  whileHover={{ scale: 1.1 }}
    className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </motion.button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <motion.div animate={isOpen ? "open" : "closed"}
      variants={variants} className="navbar-nav">
      <motion.a  className="nav-item nav-link active" href="#"> Business Partners <span className="sr-only">(current)</span></motion.a>
      <a className="nav-item nav-link" href="#">Buy</a>
      <a className="nav-item nav-link" href="#">Sell</a>
      <a className="nav-item nav-link" href="#">Contact Us</a>
    </motion.div>
  </div>
</motion.nav>
</div>
    );
}

export default Header;