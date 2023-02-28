export const Payment = ({ c, errors, register }) => {
    return (
        <div className={c.signupform}>
            <p>Хто буде здійснювати оплату?<span className={c.neces}>&#9913;</span>{(errors?.payment) && <i className="material-icons">&#xe002;</i>}</p>
            <div className={c.radio}>
                <input
                    className={c.customRadio}
                    {...register("payment", { required: "Заповніть поле" })}
                    type="radio"
                    value="student"
                    id="std"
                />
                <label htmlFor="std">Студент</label>
            </div>
            <div className={c.radio}>
                <input
                    className={c.customRadio}
                    {...register("payment", { required: "Заповніть поле" })}
                    type="radio"
                    value="parent"
                    id="prnt"
                />
                <label htmlFor="prnt">Представник студента</label>
            </div>
            {errors?.payment ? <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i><span>{errors?.payment?.message}</span></></div> : null}
        </div>
    )
}