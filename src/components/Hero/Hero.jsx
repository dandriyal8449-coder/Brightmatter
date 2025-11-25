import React from 'react'
import styled from './Hero.module.css'


const Hero = () => {
  return (
    <section className={`container ${styled.heroContainer}`}>
      <div className={styled.trusted}>
        <div className={styled.trustedImg}>
          <img src="./images/profile 1.jpg" alt="" />
          <img src="./images/profile 2.jpg" alt="" />
          <img src="./images/profile 3.jpg" alt="" />
          <img src="./images/profile 4.jpg" alt="" />
        </div>
        <span>Trusted by 20k+ people</span>
      </div>

      <h1>We Help Brands Grow With <span>Performance</span> Marketing </h1>
      <p>At our agency, we take pride in delivering impactful solutions that combine creativity, strategy, and technology.</p>
      <div className={styled.heroBtn}>
        <button className={styled.heroBtn1}>Contact Me</button>
        <button className={styled.heroBtn2}>Digital Market</button>
      </div>
      <div className={styled.heroImg}>
          <img src="./images/hero.jpg" alt="" />
      </div>
    </section>
  )
}

export default Hero