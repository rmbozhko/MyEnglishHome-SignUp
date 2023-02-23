import { NameInput } from "./NameInput";

export const ParentInfo = ({ c, ageUnderEi, register, errors, watch, now }) => {
    return (
        < div className={c.signupform} >
            {ageUnderEi ? <strong className={c.strongUnderEighteen} > Студент - неповнолітній, внесіть, будь ласка, інформацію про його представника.</strong > : null
            }
            <p>Студент та представник можуть переглядати:</p>
            <ul>
                <li>відвідування</li>
                <li>оплату</li>
                <li>документи</li>
            </ul>

            <NameInput register={register} title="Ім'я та прізвище представника" firstName="firstNameParent" secondName="secondNameParent" errors={errors} req={ageUnderEi || watch('payment') === 'parent'} c={c} />

            <span>Рік народження представника<span className={c.neces}>&#9913;</span></span>
            <div>
                <input {...register("yearParent", { required: ageUnderEi || watch('payment') === 'parent', min: 1900, max: now.getFullYear() - 18 })} className={c.birth} placeholder="Рік" name="yearParent" maxLength="4" />
                {(errors?.yearParent) && <i className="material-icons">&#xe002;</i>}
            </div>


            <span>Номер телефону представника<span className={c.neces}>&#9913;</span></span>
            <div>
                <input {...register("phoneParent", { required: ageUnderEi || watch('payment') === 'parent', pattern: /^\+380[0-9]{9}/i })} className={c.tel} type="tel" placeholder="+380123456789" name="phoneParent" maxLength="13" />
                {(errors?.phoneParent) && <i className="material-icons">&#xe002;</i>}
            </div>
        </div >
    )
}
