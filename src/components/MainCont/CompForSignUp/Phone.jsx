export const Phone = ({ ageUnderTw, register, c, errors }) => {
    return (
        <>
            <span>Номер телефону студента{!ageUnderTw ? <span className={c.neces}>&#9913;</span> : null}</span>
            <div>
                <input {...register("phone", { required: !ageUnderTw, pattern: /^\+380[0-9]{9}/i })} className={c.tel} type="tel" placeholder="+380123456789" name="phone" maxLength="13" />
                {(errors?.phone) && <i className="material-icons">&#xe002;</i>}
            </div>
        </>
    )
}
