import { StudentBirth } from './StudentBirth';
import { Phone } from './Phone';
import { NameInput } from "./NameInput";
import { StudentBirthMobile } from './StudentBirthMobile';

export const StudentInfo = ({ isMobile, clearErrors, setError, isValideDate, c, watch, register, errors, now, ageUnderTw }) => {
    return (
        <div className={c.signupform}>
            <NameInput isMobile={isMobile} watch={watch} clearErrors={clearErrors} setError={setError} register={register} title="Ім'я та прізвище студента" firstName="firstName" secondName="secondName" errors={errors} req={true} c={c} />
            {!isMobile ? <StudentBirth isValideDate={isValideDate} register={register} c={c} watch={watch} errors={errors} now={now} /> : <StudentBirthMobile isValideDate={isValideDate} register={register} c={c} watch={watch} errors={errors} now={now} />}
            <Phone isMobile={isMobile} watch={watch} ageUnderTw={ageUnderTw} register={register} c={c} errors={errors} />
        </div>
    )
}
