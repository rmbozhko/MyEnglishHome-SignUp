import c from "./Header.module.css"

export const Header = () => {
    return (
        <header className={c.header}>
            <h1><div>MY</div><div className={c.engCont}><span className={c.eng}>ENGLISH</span></div><div>HOME</div></h1>
        </header>
    )
}
