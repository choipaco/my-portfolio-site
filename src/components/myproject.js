import styles from './css/Mproject.module.css';
import "./css/hover.css";
import { useState } from 'react';

const Mproject = () =>{
const [hover, setHover] = useState('');
const [hoverComputer, setComputerHover] = useState('');
const [hoverAdvice, setAdviceHover] = useState('');
  return(
    <section>
      <div className={styles.outDiv}>
        <div className={styles.mainDiv}>

          <div className={styles.projects}>

{/** 아이디어 뱅크 */}
            <div>
              <div className={styles.ideaDiv} onMouseEnter={() => setHover('hover')} onMouseLeave={() => setHover('')}></div>
              <div  className={`${hover !== '' ? 'hoveridea' : 'noneidea'}`} onMouseEnter={() => setHover('hover')} onMouseLeave={() => setHover('')}>
                <label>대회 이름:</label> 아이디어 뱅크<br/>
                <label>작품명:</label> MaM<br/>
                <label>작품 성격:</label> 교내대회<br/>
                <label>팀원:</label> 김찬민,이상민,강민우<br/>
                <label>상장:</label> 우수상<br/>
                <label>작품설명:</label> <label className='hoverideasize'>학생들도 쓸 수 있는 온라인 중고거래 매장을 만들어보자라는 취지로 만들었다</label>
              </div>
            </div>

{/** C언어 컴퓨터 강화 프로그램 */}
            <div>
              <div className={styles.ComputerDiv} onMouseEnter={() => setComputerHover('hover')} onMouseLeave={() => setComputerHover('')}></div>
              <div  className={`${hoverComputer !== '' ? 'hoverComputer' : 'noneComputer'}`} onMouseEnter={() => setComputerHover('hover')} onMouseLeave={() => setComputerHover('')}>
                <label>작품명:</label> 컴퓨터 강화 게임<br/>
                <label>작품 성격:</label> 프로젝트<br/>
                <label>팀원:</label> 없음<br/>
                <label>상장:</label> 없음<br/>
                <label>작품설명:</label> <label className='hoverideasize'>C언어(console)로 rand함수와 sleep함수를 써서 랜덤확률로 컴퓨터가 강화되는 게임을 만들었다</label>
              </div> 
            </div>

{/** 진로상담프로젝트 */}
            <div>
              <div className={styles.AdviceDiv} onMouseEnter={() => setAdviceHover('hover')} onMouseLeave={() => setAdviceHover('')}>
              <div className={styles.AdviceDivLi} onMouseEnter={() => setAdviceHover('hover')} onMouseLeave={() => setAdviceHover('')}></div>
              </div>
              
              <div  className={`${hoverAdvice !== '' ? 'hoverAdvice' : 'noneAdvice'}`} onMouseEnter={() => setAdviceHover('hover')} onMouseLeave={() => setAdviceHover('')}>
                <h2>프로젝트 미완료</h2>
                <label>작품명:</label> gbsw_JQ <br/>
                <label>작품 성격:</label> 프로젝트<br/>
                <label>팀원:</label>  김찬민,이상민,이찬욱<br/>
                <label>상장:</label> 없음<br/>
                <label>작품설명:</label> <label className='hoverideasize'>이상민은 백엔드, 이찬욱은 프론트엔드(앱), 김찬민은 프론트엔드(웹)으로 분리하여 만들었다.</label>
              </div>  
            </div>

          </div> 




        </div>
      </div>
    </section>
  )
}
export default Mproject;
