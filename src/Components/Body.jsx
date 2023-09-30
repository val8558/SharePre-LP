import React from 'react'
import style from './Body.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coins from './Coins'

function Body() {

  const [listOfCoins, setListOfCoins] = useState ([])  

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=4").then((response) => {
        setListOfCoins(response.data.coins)
    })
  })
    
    return (
        <>
            <div className={style.background}>
            </div>
            <div className={style.Container}>
                <h1>Comece a construir seu portfólio de <br />criptomoedas</h1>
                <span>Comece de forma rápida e segura a construir seu portfólio com a SharePre.</span>
                    <a href="http://api.whatsapp.com/send?phone=5511957877222" target='_blank'>Começar</a>
            </div>

            <div className={style.cryptoContainer}>
                <div>
                    <h2>Criptomoedas populares</h2>
                <div className={style.cryptoTrend}>
                    <div>
                        {listOfCoins.map((coin => {
                            return (
                                <Coins key={coin.id}/>
                            ) 
                        }))}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Body