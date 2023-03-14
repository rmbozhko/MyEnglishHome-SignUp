import { inputChange, onfocusInput } from "../../../function/phoneInput";
import { Info } from "./Info";
import { NameInput } from "./NameInput";


export const ParentInfo = ({ isMobile, watch, clearErrors, setError, c, ageUnderEi, register, errors, now }) => {
    return (
        <div className={c.signupform}>
            {ageUnderEi && !isMobile ? <strong className={c.strongUnderEighteen} > Студент - неповнолітній, внесіть, будь ласка, інформацію про його представника.</strong> : null
            }
            {!isMobile && <Info />}
            <NameInput isMobile={isMobile} watch={watch} clearErrors={clearErrors} setError={setError} register={register} title="Ім'я та прізвище представника" firstName="firstNameParent" secondName="secondNameParent" errors={errors} req={ageUnderEi || watch('payment') === 'parent'} c={c} />
            {!isMobile ? <>
                <span>Рік народження представника{!isMobile && <span className={c.neces}>&#9913;</span>}</span>
                <div>
                    <input {...register("yearParent", { required: { value: ageUnderEi || watch('payment') === 'parent', message: "Заповніть поле" }, pattern: { value: /^\d{4}$/, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 5}` }, min: { value: now.getFullYear() - 100, message: `Рік народження може бути від ${now.getFullYear() - 100} до ${now.getFullYear() - 18}` }, max: { value: now.getFullYear() - 18, message: `Представник має бути повнолітнім` } })} className={`${c.birth} + ' ' + ${errors?.yearParent ? c.inputError : null}`} placeholder="Рік" name="yearParent" maxLength="4" />
                    {errors?.yearParent && <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.yearParent?.message}</span></></div>}
                </div>


                <span>Номер телефону представника{!isMobile && <span className={c.neces}>&#9913;</span>}</span>
                <div>
                    <input onFocus={onfocusInput} onInput={inputChange} {...register("phoneParent", { required: { value: ageUnderEi || watch('payment') === 'parent', message: "Заповніть поле" }, pattern: { value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: "Поле має бути у форматі: +380XXXXXXXXX" } })} className={`${c.tel} + ' ' + ${errors?.phoneParent ? c.inputError : null}`} type="tel" placeholder="+380XXXXXXXXX" name="phoneParent" maxLength="19" />
                    {errors?.phoneParent && <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.phoneParent?.message}</span></></div>}
                </div></> :

                <div className={c.center}>
                    <span>Рік народження представника{!isMobile && <span className={c.neces}>&#9913;</span>}</span>
                    <input {...register("yearParent", { required: { value: ageUnderEi || watch('payment') === 'parent', message: "Заповніть поле" }, pattern: { value: /^\d{4}$/, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 5}` }, min: { value: now.getFullYear() - 100, message: `Рік народження може бути від ${now.getFullYear() - 100} до ${now.getFullYear() - 18}` }, max: { value: now.getFullYear() - 18, message: `Представник має бути повнолітнім` } })} className={`${c.birth} + ' ' + ${errors?.yearParent ? c.inputError : null}`} placeholder="Рік" name="yearParent" maxLength="4" />
                    {errors?.yearParent && <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.yearParent?.message}</span></></div>}


                    <span>Номер телефону представника{!isMobile && <span className={c.neces}>&#9913;</span>}</span>
                    <input onFocus={onfocusInput} onInput={inputChange} {...register("phoneParent", { required: { value: ageUnderEi || watch('payment') === 'parent', message: "Заповніть поле" }, pattern: { value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: "Поле має бути у форматі: +380XXXXXXXXX" } })} className={`${c.tel} + ' ' + ${errors?.phoneParent ? c.inputError : null}`} type="tel" placeholder="+380XXXXXXXXX" name="phoneParent" maxLength="19" />
                    {errors?.phoneParent && <div className={`${c.error} + ' ' + ${c.nameError}`}><><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.phoneParent?.message}</span></></div>}</div>}
        </div>
    )
}
