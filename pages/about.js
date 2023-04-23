import React from 'react'
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.aboutmain}>
        <div className='container'>
          <div className='row'>
            <div className= {styles.pageheading}>
              <h1>About US</h1>
            </div>
            <div className={styles.pagecontent}>
              <p>Black Technologies Corporation is an Indian IT company with headquarters in Dehradun(UK) INDIA. It develops, supports, and sells computer software, and related services. It's best known for software products .Black technologies was founded by CORONA on march 22, 2020 .Working as a growing team day by day.Black technologies comes from word black hole "whose gravitational fields are too strong for light to escape" so basic idea behind is to do work in almost every raising technologies. We absorb high knowledge so as to increase understanding in technologies and serve best to our clients.</p>
              <p>Primarily we are working on web technologies with full stack support. Soon we would be working on software development as well.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About