import { memo } from "react";
import { inputChange, onfocusInput } from "../../../function/phoneInput";

export const Phone = memo(({ ageUnderTw, register, c, errors }) => {
    return (
        <>
            <span>Номер телефону студента{!ageUnderTw ? <span className={c.neces}>&#9913;</span> : null}</span>
            <div>
                <input onFocus={onfocusInput} onInput={inputChange} {...register("phone", { required: { value: !ageUnderTw, message: "Заповніть поле" }, pattern: { value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: `Поле має бути у форматі: +380XXXXXXXXX` } })} className={`${c.tel} + ' ' + ${errors?.phone ? c.inputError : null}`} type="tel" placeholder="+380XXXXXXXXX" name="phone" maxLength="19" />
                {errors?.phone ? <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.phone?.message}</span></></div> : null}
            </div>
        </>
    )
})
