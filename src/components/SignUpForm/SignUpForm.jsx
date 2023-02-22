import c from "./SignUpForm.module.css";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export const SignUpForm = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        watch,

    } = useForm({ mode: 'onChange' });
    const dateOfBirthWatch = watch(['year', 'month', 'day']);

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    };

    const [age, setAge] = useState(18);
    const [ageUnderTw, setAgeUnderTw] = useState(false);
    const [ageUnderEi, setAgeUnderEi] = useState(false);
    useEffect(() => {
        const day = watch('day');
        const month = watch('month');
        const year = watch('year');
        if (day === '' || month === '' || year === '') {
            return;
        }
        const dob = new Date(year, month, day);
        const dobnow = new Date(today.getFullYear(), dob.getMonth() - 1, dob.getDate());
        setAge(today.getFullYear() - dob.getFullYear());
        if (today < dobnow) {
            setAge(prev => prev - 1);
        };
        age < 13 ? setAgeUnderTw(true) : setAgeUnderTw(false);
        age < 18 ? setAgeUnderEi(true) : setAgeUnderEi(false);
    }, [dateOfBirthWatch, age, watch]);

    return (
        <div className={c.cont}>
            <div className={c.formsName}><h3>Форма реєстрації для навчання</h3></div>
            <div className={c.necesCont}><span className={c.neces}>&#9913;</span> Обов'язково заповніть</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={c.signupform}>
                    <span>Ім'я та прізвище студента<span className={c.neces}>&#9913;</span></span>


                    <div className={c.center}>
                        <input {...register("firstName", { required: true, maxLength: 20, pattern: /^([А-Я]{1}[а-яёієї]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} placeholder="Ім'я" maxLength="20" />
                        <input {...register("lastName", { required: true, maxLength: 20, pattern: /^([А-Я]{1}[а-яёієї]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} type="text" placeholder="Прізвище" maxLength="20" />
                        {(errors?.lastName || errors?.firstName) && <i className="material-icons">&#xe002;</i>}
                    </div>


                    <span>Дата народження студента<span className={c.neces}>&#9913;</span></span>
                    <div>
                        <input {...register("day", { required: true, pattern: /^(0?[1-9]|[12]\d|3[01])$/, })} className={c.birth} placeholder="День" name="day" maxLength="2" />


                        <select style={{ color: `${watch("month") === "" ? "rgba(0, 0, 0, 0.366)" : "rgba(0, 0, 0)"}` }} {...register("month", { required: true, })}>
                            <option value="" hidden>Місяць</option>
                            <option value="1">Січень</option>
                            <option value="2">Лютий</option>
                            <option value="3">Березень</option>
                            <option value="4">Квітень</option>
                            <option value="5">Травень</option>
                            <option value="6">Червень</option>
                            <option value="7">Липень</option>
                            <option value="8">Серпень</option>
                            <option value="9">Вересень</option>
                            <option value="10">Жовтень</option>
                            <option value="11">Листопад</option>
                            <option value="12">Грудень</option>
                        </select>


                        <input {...register("year", { required: true, min: 1900, max: now.getFullYear() })} className={c.birth} placeholder="Рік" name="year" maxLength="4" />
                        {(errors?.day || errors?.month || errors?.year) && <i className="material-icons">&#xe002;</i>}
                    </div>


                    <span>Номер телефону студента{!ageUnderTw ? <span className={c.neces}>&#9913;</span> : null}</span>
                    <div>
                        <input {...register("phone", { required: !ageUnderTw, pattern: /^\+380[0-9]{9}/i })} className={c.tel} type="tel" placeholder="+380123456789" name="phone" maxLength="13" />
                        {(errors?.phone) && <i className="material-icons">&#xe002;</i>}
                    </div>
                </div>


                {ageUnderEi ?
                    <div className={c.signupform}>
                        <strong className={c.strongUnderEighteen}>Студент - неповнолітній, внесіть, будь ласка, інформацію про його представника.</strong>
                        <p>Студент та представник можуть переглядати:</p>
                        <ul>
                            <li>відвідування</li>
                            <li>оплату</li>
                            <li>документи</li>
                        </ul>

                        <span>Ім'я та прізвище представника<span className={c.neces}>&#9913;</span></span>


                        <div className={c.center}>
                            <input {...register("firstNameParent", { required: ageUnderEi, maxLength: 20, pattern: /^([А-Я]{1}[а-яёієї]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} placeholder="Ім'я" maxLength="20" />
                            <input {...register("lastNameParent", { required: ageUnderEi, maxLength: 20, pattern: /^([А-Я]{1}[а-яёієї]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} type="text" placeholder="Прізвище" maxLength="20" />
                            {(errors?.lastNameParent || errors?.firstNameParent) && <i className="material-icons">&#xe002;</i>}
                        </div>


                        <span>Рік народження представника<span className={c.neces}>&#9913;</span></span>
                        <div>
                            <input {...register("yearParent", { required: ageUnderEi, min: 1900, max: now.getFullYear() - 18 })} className={c.birth} placeholder="Рік" name="yearParent" maxLength="4" />
                            {(errors?.yearParent) && <i className="material-icons">&#xe002;</i>}
                        </div>


                        <span>Номер телефону представника<span className={c.neces}>&#9913;</span></span>
                        <div>
                            <input {...register("phoneParent", { required: ageUnderEi, pattern: /^\+380[0-9]{9}/i })} className={c.tel} type="tel" placeholder="+380123456789" name="phoneParent" maxLength="13" />
                            {(errors?.phoneParent) && <i className="material-icons">&#xe002;</i>}
                        </div>
                    </div>
                    :
                    null}


                <div className={c.check}>
                    <input className={c.customCheckbox} id="contract" name="contract" type="checkbox" {...register("contract", { required: true })} />
                    <label for="contract">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з умовами договору про навчання в студії “My English Home”</label>
                    {(errors?.contract) && <i className="material-icons">&#xe002;</i>}
                </div>
                <div className={c.check}>
                    <input className={c.customCheckbox} id="behavior" name="behavior" type="checkbox" {...register("behavior", { required: true })} />
                    <label for="behavior">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з правилами поведінки в студії “My English Home”</label>
                    {(errors?.behavior) && <i className="material-icons">&#xe002;</i>}
                </div>
                <div className={c.formsName}>
                    <input className={c.regButton} type="submit" value="ЗАРЕЄСТРУВАТИСЬ" />
                </div>
            </form>
        </div>
    )
}
