import React, { useState } from 'react'
import styled from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={styled.navbar}>
      <div className={`container ${styled.headerContainer}`}>
        {/* nav left */}
        <div className={styled.logo}>
          <p>Brightmatter.io</p>
        </div>

        {/* nav midd */}
        <div className={styled.menu}>
          <Link className={styled.menuLink} to={'/'}>Home</Link>
          <Link className={styled.menuLink} to={'#services'}>Services</Link>
          <Link className={styled.menuLink} to={'#work'}>Work</Link>
          <Link className={styled.menuLink} to={'#contact'}>Contact</Link>
        </div>


        <div className={styled.menuBtn}>
          {
        showMenu ?
        <RxCross1 className={styled.menuIcon} onClick={() =>setShowMenu(!showMenu)} />
        :
        <TiThMenu className={styled.menuIcon} onClick={() =>setShowMenu(!showMenu)} />
        }
        </div>

        {/* nav right */}
        <div className={styled.btn}>
          <button>
            Contact Me
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* mobail version */}
      {
        showMenu &&
      <div className={styled.menuMobail}>
          <Link onClick={() =>setShowMenu(!showMenu)} className={styled.menuLinkMobail} to={'/'}>Home</Link>
          <Link onClick={() =>setShowMenu(!showMenu)} className={styled.menuLinkMobail} to={'#services'}>Services</Link>
          <Link onClick={() =>setShowMenu(!showMenu)} className={styled.menuLinkMobail} to={'#work'}>Work</Link>
          <Link onClick={() =>setShowMenu(!showMenu)} className={styled.menuLinkMobail} to={'#contact'}>Contact</Link>
        </div>
      }
    </header>
  )
}

export default Navbar