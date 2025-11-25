import React from 'react'
import styled from './Contact.module.css'
const Contact = () => {
  return (
    <section className={`container ${styled.contactSection}`}>
        <div className={styled.contactSectionHeading}>
            <h2>Reach out to us</h2>
            <p>Let’s talk! Whether it’s a quick question or a big project, we’re just a message away.</p>
        </div>
        <div className={styled.contactForm}>
            <div className={styled.inputGroup}>
                <div className={styled.inputGroupRow}>
                    <label>Your Name</label>
                    <input placeholder='Enter Your Name' type="text" />
                </div>

                <div className={styled.inputGroupRow}>
                    <label>Your Email</label>
                    <input placeholder='Enter Your Email' type="email" />
                </div>
            </div>
            <div className={styled.contactMag}>
                <label>Your Message</label>
                <textarea name="" id="" rows={10} placeholder='Enter Your Message'></textarea>
            </div>
            <button>Submit</button>
        </div>


    </section>
  )
}

export default Contact