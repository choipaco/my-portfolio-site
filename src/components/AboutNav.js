import {NavLink} from "react-router-dom";
import styles from "./css/AboutNav.module.css";
// import styled from "styled-components";
function AboutNav(){
  const navLinkStyles = ({ isActive }) => {
    return{
      fontWeight: isActive ? '880' : 'normal'
  }
  }
  return(
    <nav className={styles.NavMain}> 
      

        <div className={styles.DivLogo}><NavLink to='/main' className={styles.notStyle}><label className={styles.Logo} >CHANMIN</label></NavLink></div>
        <div className={styles.aboutnav}>
          <NavLink to='/main' style={navLinkStyles}><label className={styles.Astyle}>Home</label></NavLink>
          <NavLink to='/home' style={navLinkStyles}><label className={styles.Astyle}>AboutMe</label></NavLink>
          <NavLink to='/Mskill' style={navLinkStyles}><label className={styles.Astyle}>My skil</label></NavLink>
          <NavLink to='/Mproject' style={navLinkStyles}><lable className={styles.Astyle}>My project</lable></NavLink>
        </div>

      
      
     
      
    </nav>
  )
}


export default AboutNav;