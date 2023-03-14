export const Payment = ({ selected, setSelected, isMobile, c, errors, register }) => {
    const handleChange = event => {
        setSelected(event.target.value);
    };
    return (
        <div className={c.signupform}>
            {!isMobile ? <p>Хто буде здійснювати оплату?<span className={c.neces}>&#9913;</span>{(errors?.payment) && <i className="material-icons">&#xe002;</i>}</p> : <p className={c.fillform}>Хто буде здійснювати оплату?{(errors?.payment) && <i className="material-icons">&#xe002;</i>}</p>}
            <div className={c.radio}>
                <input
                    className={c.customRadio}
                    {...register("payment", { onChange: handleChange, required: "Заповніть поле" })}
                    type="radio"
                    value="student"
                    id="std"
                    checked={selected === 'student'}
                />
                <label htmlFor="std">Студент</label>
            </div>
            <div className={c.radio}>
                <input
                    className={c.customRadio}
                    {...register("payment", { onChange: handleChange, required: "Заповніть поле" })}
                    type="radio"
                    value="parent"
                    id="prnt"
                    checked={selected === 'parent'}
                />
                <label htmlFor="prnt">Представник студента</label>
            </div>
            {errors?.payment ? <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.payment?.message}</span></></div> : null}
        </div>
    )
}
