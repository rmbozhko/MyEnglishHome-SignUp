export const Phone = ({ ageUnderTw, register, c, errors }) => {

    return (
        <>
            <span>Номер телефону студента{!ageUnderTw ? <span className={c.neces}>&#9913;</span> : null}</span>
            <div>
                <input {...register("phone", { required: { value: !ageUnderTw, message: "Заповніть поле" }, pattern: { value: /^\+380[0-9]{9}/i, message: "Поле має бути у форматі: +380XXXXXXXXX" } })} className={`${c.tel} + ' ' + ${errors?.phone ? c.inputError : null}`} type="tel" placeholder="+380XXXXXXXXX" name="phone" maxLength="13" />
                {errors?.phone ? <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i><span>{errors?.phone?.message}</span></></div> : null}
            </div>
        </>
    )
}
