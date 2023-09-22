import style from "./Header.module.css"
import logo from "../assets/SharePreLogo.svg"
import React from 'react'




function Header() {
  return (
    <div className={style.header}>
        <img src={logo} alt="" width="213px" height="44px"/>
    </div>
  )
}

export default Header