import c from "./Header.module.css";
import logo from "../../images/logo.png";
import mobilelogo from '../../images/mobilelogo.png'

export const Header = ({ isMobile }) => {
    return (
        <header className={c.header}>
            <img className={c.logo} src={isMobile ? mobilelogo : logo} alt="logo"></img>
            {isMobile && <div className={c.flextitle}><p className={c.title}>Форма реєстрації</p><p className={c.title}> для навчання</p></div>}
        </header>
    )
}
