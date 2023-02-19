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
                    <span className={c.label}>Дата народження студента<span className={c.neces}>&#9913;</span></span>
                    <div>
                        <input className={c.birth} type="text" placeholder="День" name="day" required></input>
                        <select id="cars" name="cars" placeholder="Місяць">
                            <option value="none" disabled selected>Місяць</option>
                            <option value="january">Січень</option>
                            <option value="february">Лютий</option>
                            <option value="march">Березень</option>
                            <option value="april">Квітень</option>
                            <option value="may">Травень</option>
                            <option value="june">Червень</option>
                            <option value="july">Липень</option>
                            <option value="august">Серпень</option>
                            <option value="september">Вересень</option>
                            <option value="october">Жовтень</option>
                            <option value="november">Листопад</option>
                            <option value="december">Грудень</option>
                        </select>
                        <input className={c.birth} type="text" placeholder="Рік" name="year" required></input>
                    </div>
                    <span className={c.label}>Номер телефону студента<span className={c.neces}>&#9913;</span></span>
                    <div>
                        <input className={c.name} type="text" placeholder="+38_________" name="firstname" required></input>
                    </div>
                </form>
            </div>
        </div>
    )
}
