import styles from './css/LR.module.css';
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import {NavLink} from "react-router-dom";

function LeftRightButton () {
  const location = useLocation();
  if(location.pathname === "/"){
    return(
      <nav>
        <div className={styles.left}>
        <NavLink to='#'><div><BiChevronLeft/></div></NavLink>
        </div>
        <div className={styles.right}>
        <NavLink to='/home'><BiChevronRight/></NavLink>
        </div>
      </nav>
    )
  }
  else if(location.pathname === "/main"){
        return(
          <nav>
            <div className={styles.left}>
            <NavLink to='#'><div><BiChevronLeft/></div></NavLink>
            </div>
            <div className={styles.right}>
            <NavLink to='/home'><div><BiChevronRight/></div></NavLink>
            </div>
          </nav>
        )
  }
  else if(location.pathname === "/home"){
        return(
          <nav>
            <div className={styles.left}>
            <NavLink to='/main'><div><BiChevronLeft/></div></NavLink>
            </div>
            <div className={styles.right}>
            <NavLink to='/Mskill'><div><BiChevronRight/></div></NavLink>
            </div>
          </nav>
        )
  }
  else if(location.pathname === "/Mskill"){
        return(
          <nav>
            <div className={styles.left}>
            <NavLink to='/home'><div><BiChevronLeft/></div></NavLink>
            </div>
            <div className={styles.right}>
            <NavLink to='/Mproject'><div><BiChevronRight/></div></NavLink>
            </div>
          </nav>
        )
  }
  else if(location.pathname === "/Mproject"){
        return(
          <nav>
            <div className={styles.left}>
              <NavLink to='/Mskill'><div><BiChevronLeft/></div></NavLink>
            </div>
            <div className={styles.right}>
            <NavLink to='#'><div><BiChevronRight/></div></NavLink>
            </div>
          </nav>
        )
  }

}

export default LeftRightButton;