import {NavLink} from "react-router-dom";
import styles from "./css/nav.module.css";
// import styled from "styled-components";
function Nav(){
  const navLinkStyles = ({ isActive }) => {
    return{
      fontWeight: isActive ? 'bold' : 'normal'
  }
  }
  return(
    <nav className={styles.NavMain}> 
      
      <ol id="orange">
        <div className={styles.DivLogo}><NavLink to='/main'><label className={styles.Logo} >CHANMIN</label></NavLink></div>
        <div className={styles.headLine}></div>
        <br/>
        <li><NavLink to='/main' style={navLinkStyles} ><label className={styles.navAbout} >Home</label></NavLink></li>
        <li><NavLink to='/home' style={navLinkStyles} ><label className={styles.navAbout} >AboutMe</label></NavLink></li>
        <li><NavLink to='/Mskill' style={navLinkStyles} ><label className={styles.navAbout} >My skil</label></NavLink></li>
        <li><NavLink to='/Mproject' style={navLinkStyles} ><label className={styles.navAbout} >My project</label></NavLink></li>
      </ol>
      
      
     
      
    </nav>
  )
}


export default Nav;