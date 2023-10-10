import React from 'react'
import style from './Body.module.css'
import Crypto from '../assets/CImg.svg'
import secur from '../assets/SecurityImg.svg'
import crypto from '../assets/CryptoImg.svg'
import Method from '../assets/MethodImg.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coins from './Coins'

function Body() {

    const [listOfCoins, setListOfCoins] = useState([])

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
                <h2>Criptomoedas populares</h2>
                <div className={style.cryptoTrend}>
                    {listOfCoins.map((coin => {
                        return (
                            <Coins
                                key={coin.id}
                                name={coin.name}
                                icon={coin.icon}
                                price={coin.price}
                                symbol={coin.symbol}
                            />
                        )
                    }))}
                </div>
            </div>

            <div className={style.characteristics}>
                <h1>Características SharePre</h1>
                <span> Explore a rapidez e segurança para começar no mundo dos criptoativos.</span>
            </div>

            <div className={style.charCard}>
                <div className={style.CardPort}>
                    <img src={Crypto} />
                    <h1>Gerencie seu portfolio</h1>
                    <span>Compre e venda criptomoedas de qualquer lugar.

</span>
                </div>
                <div className={style.CardSecu}>
                    <img src={secur} />
                    <h1>Segurança</h1>
                    <span>
                        Negociação totalmente em confirmidade com o novo marco legal dos criptoativos.
                    </span>
                </div>
                <div className={style.CardSup}>
                    <img src={crypto} />
                    <h1>Suporte a variação de valores</h1>
                    <span>
                        Total suporte as variaçoes de preço na hora da sua transação.
                    </span>
                </div>
                <div className={style.CardMeth}>
                    <img src={Method} />
                    <h1>Metodo</h1>
                    <span>
                        Compre diretamente com um dos nossos vendedores por Whatsapp. 
                    </span>
                </div>
            </div>
        </>
    )
}

export default Body