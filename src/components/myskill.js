import styles from './css/Mskill.module.css';
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
//import { IoLogoJavascript } from "react-icons/io5";
import { DiReact } from "react-icons/di";
//import { DiNodejsSmall } from "react-icons/di";
const Mskill = () =>{
  return(
    <section>
      <div className={styles.outDiv}>
        <div className={styles.mainDiv}>
            <div className={styles.skill}>

              <fieldset className={styles.learn}>
                <legend>배우는 중인 것들</legend>
                  <div className={styles.skillBox}><div className={styles.skillFlex}>
                      <div className={styles.nodejs}></div><label>node.js</label>
                  </div></div>
                  
                  <div className={styles.skillBox}><div className={styles.skillFlexJava}>
                      <div className={styles.JavaLen}/><label>java</label>
                  </div></div>
                  
                  <div className={styles.skillBox}><div className={styles.skillFlex}>
                    <div className={styles.C_Len}/><label>C language</label>
                  </div></div>

              </fieldset>
              <fieldset className={styles.skillSet}>
                  <legend>할 수 있는 것들</legend>

                  <div className={styles.skillBox}><div className={styles.skillFlex}>
                    <div className={styles.html}><TiHtml5/></div><label>HTML</label>
                  </div></div>

                  <div className={styles.skillBox}><div className={styles.skillFlex}>
                    <div className={styles.css}><IoLogoCss3/></div><label>CSS</label>
                  </div></div>

                  <div className={styles.skillBox}><div className={styles.skillFlex}>
                    <div className={styles.react}><DiReact/></div><label>react</label>
                  </div></div>

                  <div className={styles.skillBox}><div className={styles.skillFlex}>
                    <div className={styles.js}></div><label>javascript</label>
                  </div></div>



              </fieldset>
                

            </div>
        </div>
      </div>
    </section>
  )
}
export default Mskill;
