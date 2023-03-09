export const StudentBirth = ({ isValideDate, register, c, watch, errors, now }) => {
    return (
        <>
            <span>Дата народження студента<span className={c.neces}>&#9913;</span></span>
            <div>
                <input {...register("day", { required: "Заповніть поле", pattern: { value: /^(0?[1-9]|[12]\d|3[01])$/, message: "Поле може містити тільки цифри від 1 до 31" }, })} className={`${c.birth} + ' ' + ${errors?.day || !isValideDate ? c.inputError : null}`} placeholder="День" name="day" maxLength="2" />


                <select style={{ color: `${watch("month") !== "" ? "rgba(0, 0, 0, 0.910)" : "rgba(0, 0, 0, 0.361)"}` }} className={errors?.month || !isValideDate ? c.inputError : null} {...register("month", { required: "Заповніть поле", })}>
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


                <input {...register("year", { required: "Заповніть поле", pattern: { value: /^\d{4}$/, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 5}` }, min: { value: now.getFullYear() - 100, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 5}` }, max: { value: now.getFullYear() - 5, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 5}` } })} className={`${c.birth} + ' ' + ${errors?.year || !isValideDate ? c.inputError : null}`} placeholder="Рік" name="year" maxLength="4" />
                {errors?.day || errors?.year || !isValideDate ? <div className={c.center}>
                    <div className={`${c.error} + ' ' + ${c.nameError}`}>{errors?.day && <><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.day?.message}</span></>} {!isValideDate && <><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>Такої дати не існує</span></>}</div>
                    <div className={`${c.error} + ' ' + ${c.nameError}`}>{errors?.year && <><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.year?.message}</span></>}</div>
                </div> : null}
            </div>
        </>
    )
}
