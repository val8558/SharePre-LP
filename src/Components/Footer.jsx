import style from "./Footer.module.css"
import Logo from "../assets/SharePreLogo.svg"

function Footer() {
    return (
        <div className={style.FooterContainer}>
            <div className={style.Logo}>
                <img src={Logo} alt="" />
            </div>
            <div className={style.SocialMedia}>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className={style.Infos}>
                <p>Todos direitos reservados, SharePre Ltda.  CNPJ 45.953.406/0001-27</p>
                <p>Av. Paulista, 2073, Horsa 1, sala 823. – Bela Vista - São Paulo, SP </p>
            </div>

        </div>
    )
}

export default Footer