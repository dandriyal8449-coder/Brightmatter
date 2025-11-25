import React from 'react'
import styled from './Services.module.css'
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";



const Services = () => {
  return (
    <section className={`container ${styled.servicesSection}`} >
        <h2>How we can Help you?</h2>
        <p>Whether you're launching a new business or looking to elevate your existing brand.</p>

        <div className={styled.servicesGrid}>
            <div className={styled.servicesGridRow}>
                <div className={styled.servicesGridRowLeft}>
                    <div className={styled.servicesCardIcon}>
                        <FaCode className={styled.cardIcon} />
                    </div>
                </div>
                <div className={styled.servicesGridRowRight}>
                    <h3>Web Development</h3>
                    <span>We create fast, responsive, and user-friendly websites tailored to your business needs.</span>
                </div>
            </div>

            <div className={styled.servicesGridRow}>
                <div className={styled.servicesGridRowLeft}>
                    <div className={styled.servicesCardIcon}>
                        <FaPaintBrush className={styled.cardIcon} />
                    </div>
                </div>
                <div className={styled.servicesGridRowRight}>
                    <h3>Graphic Design</h3>
                    <span>Eye-catching visuals that speak your brand's language. Our graphic design services</span>
                </div>
            </div>

            <div className={styled.servicesGridRow}>
                <div className={styled.servicesGridRowLeft}>
                    <div className={styled.servicesCardIcon}>
                        <AiFillSound className={styled.cardIcon}/>
                    </div>
                </div>
                <div className={styled.servicesGridRowRight}>
                    <h3>Digital Marketing</h3>
                    <span>Grow your online presence with our strategic digital marketing services.</span>
                </div>
            </div>

            <div className={styled.servicesGridRow}>
                <div className={styled.servicesGridRowLeft}>
                    <div className={styled.servicesCardIcon}>
                        <FaMobile className={styled.cardIcon}/>
                    </div>
                </div>
                <div className={styled.servicesGridRowRight}>
                    <h3>Mobile App Development</h3>
                    <span>Transform your ideas into functional, high-performance mobile apps.</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services