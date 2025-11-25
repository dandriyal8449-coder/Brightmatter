import React from 'react'
import styled from './Footer.module.css'

const Footer = () => {
  return (
    <footer className='container'>
        <div className={styled.footerContainer}>
            <div className={styled.footerTop}>
                <div className={styled.footerTopLeft}>
                    <h2>Brightmatter.ai</h2>
                    <p>Whether you're launching a new business or looking to elevate your existing brand.</p>
                    <div className={styled.footerBtn}>
                        <button>Home</button>
                        <button>Services</button>
                        <button>Work</button>
                        <button>Contact</button>
                    </div>
                </div>
                <div className={styled.footerTopRight}>
                    <h2>Subscribe to our newsletter</h2>
                    <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className={styled.footerInput}>
                        <input placeholder='Enter Your Email' type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styled.footerBottom}>
                <p>Copyright 2025 © TheAbhishekCodes - All Right Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer