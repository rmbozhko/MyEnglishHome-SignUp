import c from "./SignUpForm.module.css";
import { useForm } from 'react-hook-form';

export const SignUpForm = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return (
        <div className={c.cont}>
            <div className={c.formsName}><h3>Форма реєстрації для навчання</h3></div>
            <div className={c.necesCont}><span className={c.neces}>&#9913;</span> Обов'язково заповніть</div>
            <div className={c.signupform}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className={c.label}>Ім'я та прізвище студента<span className={c.neces}>&#9913;</span></span>
                    <div className={c.center}>
                        <input {...register("firstName", { required: true, maxLength: 20, pattern: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} placeholder="Ім'я" maxLength="20" />
                        <input {...register("lastName", { required: true, maxLength: 20, pattern: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} type="text" placeholder="Прізвище" maxLength="20" />
                        {(errors?.lastName || errors?.firstName) && <i className="material-icons">&#xe002;</i>}
                    </div>
                    <span className={c.label}>Дата народження студента<span className={c.neces}>&#9913;</span></span>
                    <div>
                        <input {...register("day", { required: true, pattern: /^(0?[1-9]|[12]\d|3[01])$/, })} className={c.birth} placeholder="День" name="day" />
                        <select {...register("month", { required: true, validate: (value) => value === "DEFAULT" })} id="cars" name="cars" defaultValue={'DEFAULT'}>
                            <option value='DEFAULT' hidden>Місяць</option>
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
                        <input {...register("year", { required: true, pattern: /^(19[0-8][0-9]|199[0-9]|20[0-9][0-9]|2023)$/ })} className={c.birth} placeholder="Рік" name="year" maxLength="4" minLength="4" />
                        {(errors?.day || errors?.month || errors?.year) && <i className="material-icons">&#xe002;</i>}
                    </div>
                    <span className={c.label}>Номер телефону студента<span className={c.neces}>&#9913;</span></span>
                    <div>
                        <input {...register("phone", { required: true, maxLength: 13 })} className={c.tel} type="tel" placeholder="+380123456789" name="phone" maxLength="13" />
                        {(errors?.phone) && <i className="material-icons">&#xe002;</i>}
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}
