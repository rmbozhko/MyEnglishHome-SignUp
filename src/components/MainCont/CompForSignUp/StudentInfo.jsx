import { StudentBirth } from './StudentBirth';
import { Phone } from './Phone';
import { NameInput } from "./NameInput";

export const StudentInfo = ({ c, watch, register, errors, now, ageUnderTw }) => {
    return (
        <div className={c.signupform}>
            <NameInput register={register} title="Ім'я та прізвище студента" firstName="firstName" secondName="secondName" errors={errors} req={true} c={c} />
            <StudentBirth register={register} c={c} watch={watch} errors={errors} now={now} />
            <Phone ageUnderTw={ageUnderTw} register={register} c={c} errors={errors} />
        </div>
    )
}
