import React from 'react'
import style from "./Coins.module.css"



function Coins({name, symbol, price, icon}) {


  return (
    <>
    <div className={style.Container}>
        <div className={style.CoinsHeader}>
            <img src={icon}/>
            <h1>{symbol}</h1>
            <h4>{name}</h4>
        </div>
        
        <h1>${price}</h1>
    </div>
    </>
    
  )
}

export default Coins