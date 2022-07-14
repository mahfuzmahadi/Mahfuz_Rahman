import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";



const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY PROTFOLIO</h3>
            <h2>
              Hi, I’m <span>Mahfuzur Rahman </span>
            </h2>
            <h2>
              a
              <span>
                <Typewriter words={[" Front End Developer.", " Problem Solver."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>To employ my knowledge and experience with the goal of securing a professional
career with opportunity for challenges and career advancement, while gaining
knowledge of skills and expertise. and helping the organization with maximum efforts to
achieve its ultimate goal.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND  ME</h4>
                <div className='button'>
                  <button className='btn_shadow' onClick={event => window.location.href='https://www.facebook.com/mahadimahfuz'}>
                    <FaFacebook/>
                  </button>
                  <button className='btn_shadow' onClick={event => window.location.href='https://www.linkedin.com/in/mahfuzur-rahman-7524b1232/'}>
                    <FaLinkedin/>
                  </button>
                  <button className='btn_shadow'  onClick={event => window.location.href='https://github.com/mahfuzmahadi'}>
                    <FaGithub/>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
              
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
