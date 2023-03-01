export const Button = ({ isValid, c, errors }) => {
    return (
        <div className={c.formsName}>
            <input className={!isValid ? c.regButton : c.regButton + ' ' + c.regButtonActive} type="submit" value="ЗАРЕЄСТРУВАТИСЬ" />
        </div>
    )
}
