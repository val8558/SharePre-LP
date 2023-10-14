import style from "./Footer.module.css"
import Logo from "../assets/SharePreLogo.svg"
import Insta from "../assets/instagram-ic.svg"
import Twitter from "../assets/twitter-ic.svg"
import Face from "../assets/facebook-ic.svg"

function Footer() {
    return (
        <div className={style.FooterContainer}>
            <div className={style.Logo}>
                <img src={Logo} alt="" />
            </div>
            <div className={style.SocialMedia}>
                <img src={Insta} alt="" />
                <img src={Face} alt="" />
                <img src={Twitter} alt="" />
            </div>
            <div className={style.Infos}>
                <p>Todos direitos reservados, SharePre Ltda.  CNPJ 45.953.406/0001-27</p>
                <p>Av. Paulista, 2073, Horsa 1, sala 823. – Bela Vista - São Paulo, SP </p>
            </div>

        </div>
    )
}

export default Footer