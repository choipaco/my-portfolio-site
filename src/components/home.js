import styles from './css/home.module.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
function Home(){
  return(
    <section>
    <div className={styles.outDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.profileImg}>
        <div className={styles.humanImg}/>
          <div className={styles.Self}>
            <table>
              <tbody>
              <tr>
              <td>이름:</td>
              <td>김찬민</td>
              </tr>
              <tr>
              <td>나이:</td>
              <td>17세</td>
              </tr>
              <tr>
              <td>생년월일:</td>
              <td>2006년/10월/14일</td>
              </tr>
              <tr>
              <td >학교:</td>
              <td>경북소프트웨어고등학교
            </td>
              </tr>
              <tr>
                <td>간단한 자기소개:</td>
                <td>
                  아직 미흡하지만 노력하여 열심히 능력을 키우겠습니다!
                </td>
              </tr>
              </tbody>
            </table> 
            
          </div>
        </div>
        <div className={styles.IconMain}>
            <div className={styles.IconCom}>
              <div className={styles.Icon}>
                <BsFillTelephoneFill className={styles.phone}/><br/>
                010-4795-1922
              </div>
              <div className={styles.Icon}>
                <a href='https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=CllgCJvqrsxpwtgHXgLJqvnmNmJsxTrBkTmLhVNCkDgGcfGqjgtHnpKVFVvsGbXrWwXjWcCQQCL' target="blank" className={styles.gmail}><AiOutlineMail/></a><br/>
                <a href='https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=CllgCJvqrsxpwtgHXgLJqvnmNmJsxTrBkTmLhVNCkDgGcfGqjgtHnpKVFVvsGbXrWwXjWcCQQCL' target="blank" className={styles.gmail}> cksals1014@gmail.com </a>
              </div>
              <div className={styles.Icon}>
                <a href='https://github.com/choipaco' target="blank" className={styles.github}><AiFillGithub/></a><br/>
                <a href='https://github.com/choipaco' target="blank" className={styles.github}>https://github.com/choipaco</a>
              </div>
              <div className={styles.Icon}>
              <a href='https://discord.com/channels/@me' target="blank"><BsDiscord className={styles.discordColor}/></a><br/>
                <a href='https://discord.com/channels/@me' target="blank" className={styles.discordText}>choipaco#6043</a>
              </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}


export default Home;