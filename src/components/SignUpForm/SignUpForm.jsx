import c from "./SignUpForm.module.css";

export const SignUpForm = () => {
    return (
        <div className={c.cont}>
            <div className={c.formsName}><h3>Форма реєстрації для навчання</h3></div>
            <div className={c.necesCont}><span className={c.neces}>&#9913;</span> Обов'язково заповніть</div>
            <div className={c.signupform}>
                <form>
                    <span className={c.label}>Ім'я та прізвище студента<span className={c.neces}>&#9913;</span></span>
                    <div>
                        <input className={c.name} type="text" placeholder="Ім'я" name="firstname" required></input>
                        <input className={c.name} type="text" placeholder="Прізвище" name="secondname" required></input>
                    </div>
                </form>
            </div>
        </div>
    )
}
