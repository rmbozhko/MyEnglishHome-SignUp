export const Button = ({ c, errors }) => {
    return (
        <div className={c.formsName}>
            <input className={Object.keys(errors).length ? c.regButton : c.regButton + ' ' + c.regButtonActive} type="submit" value="ЗАРЕЄСТРУВАТИСЬ" />
        </div>
    )
}
