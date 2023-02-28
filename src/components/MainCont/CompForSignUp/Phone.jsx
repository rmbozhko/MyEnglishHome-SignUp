export const Phone = ({ ageUnderTw, register, c, errors }) => {

    // const inputChange = e => {
    //     const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    //     e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '');
    // }

    const inputChange = e => {
        const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
    }
    return (
        <>
            <span>Номер телефону студента{!ageUnderTw ? <span className={c.neces}>&#9913;</span> : null}</span>
            <div>
                <input onInput={inputChange} {...register("phone", { required: { value: !ageUnderTw, message: "Заповніть поле" }, pattern: { value: /^\+380[0-9]{9}/i, message: "Поле має бути у форматі: +380XXXXXXXXX" } })} className={`${c.tel} + ' ' + ${errors?.phone ? c.inputError : null}`} type="tel" placeholder="+380XXXXXXXXX" name="phone" maxLength="15" />
                {errors?.phone ? <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i><span>{errors?.phone?.message}</span></></div> : null}
            </div>
        </>
    )
}
