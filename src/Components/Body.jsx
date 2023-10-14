import React from 'react'
import style from './Body.module.css'
import Crypto from '../assets/CImg.svg'
import secur from '../assets/SecurityImg.svg'
import crypto from '../assets/CryptoImg.svg'
import Method from '../assets/MethodImg.svg'
import AccImg from '../assets/AccImg.svg'
import PayImg from '../assets/PayImg.svg'
import SupImg from '../assets/SupImg.svg'
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
                    <span>Compre e venda criptomoedas de qualquer lugar.</span>
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

            <div className={style.StartContainer}>
                <div className={style.LeftSide}>
                    <h1>Como Começar</h1>
                    <span>Maneira simples e facil de comecar seus investimentos em Cryptomoedas.</span>
                    <a href="http://api.whatsapp.com/send?phone=5511957877222" target='_blank'>Comece Agora</a>
                </div>

                <div className={style.RightSide}>
                    <div className={style.StartBox}>
                        <div className={style.IconImg}>
                            <img src={AccImg} alt="" />
                        </div>
                        <div className={style.CardText}>
                            <h1>Sem criar conta</h1>
                            <span>Faça a compra do criptoativo direto com um dos nossos vendedores e receba em sua carteira de preferência. </span>
                        </div>

                    </div>
                    <div className={style.StartBox}>
                        <div className={style.IconImg}>
                            <img src={PayImg} alt="" />
                        </div>
                        <div className={style.CardText}>
                            <h1>Pagamento fácil</h1>
                            <span>Escolha a forma que pretende comprar seu criptoativo, podendo ser PIX, Tranferência bancária ou cartão crédito.</span>
                        </div>

                    </div>
                    <div className={style.StartBox}>
                        <div className={style.IconImg}>
                            <img src={SupImg} alt="" />
                        </div>
                        <div className={style.CardText}>
                            <h1>Suporte Personalizado</h1>
                            <span>Suporte humano e personalizado para sua necessidade, Em caso de dúvidas um de entre em contato com nossos atendentes.</span>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Body