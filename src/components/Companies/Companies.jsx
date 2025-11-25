import React from 'react'
import styled from './Companies.module.css'
import { BsMicrosoft, BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";


const Companies = () => {
  return (
    <section className={`container ${styled.companiesSection}`}>
            <h2>Trusted by leading companies</h2>
        <div className={styled.CompaniesGrid}>
            <div className={styled.CompaniesRow}>
                <BsMicrosoft className={styled.CompaniesRowIcon} />
            </div>

            <div className={styled.CompaniesRow}>
                <BsFacebook className={styled.CompaniesRowIcon} />
            </div>

            <div className={styled.CompaniesRow}>
                <FaLinkedin className={styled.CompaniesRowIcon} />
            </div>

            <div className={styled.CompaniesRow}>
                <FaApple className={styled.CompaniesRowIcon} />
            </div>

            <div className={styled.CompaniesRow}>
                <FaInstagramSquare className={styled.CompaniesRowIcon} />
            </div>

            <div className={styled.CompaniesRow}>
                <FaGoogle className={styled.CompaniesRowIcon} />
            </div>

            <div className={styled.CompaniesRow}>
                <SiIndeed className={styled.CompaniesRowIcon} />
            </div>
        </div>
    </section>
  )
}

export default Companies