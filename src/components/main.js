import styles from './css/main.module.css'; 

function Main(){
  return(
    <>
    <section className={styles.outDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.backImg}>
          <h1>WELCOME TO<br/> <label className={styles.CHANMIN}>CHANMIN</label> PORTPOLIO!</h1>
        </div>
      </div>
    </section>
    </>
  )
}


export default Main;