import c from "./Header.module.css";
import logo from "../../images/logo.png";

export const Header = () => {
    return (
        <header className={c.header}>
            <img className={c.logo} src={logo} alt="logo"></img>
        </header>
    )
}
