export const StudentBirth = ({ register, c, watch, errors, now }) => {
    return (
        <>
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
        </>
    )
}
