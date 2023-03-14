import { Button } from './Button';
import { CheckboxInputs } from "./CheckboxInputs";
import { ParentInfo } from './ParentInfo';
import { Payment } from './Payment';
import { StudentInfo } from './StudentInfo';

export const SignUpForm = ({ checkerOne, checkerTwo, setCheckerOne, setCheckerTwo, selected, setSelected, clearErrors, setError, isValid, isValideDate, handleSubmit, onSubmit, c, register, watch, errors, now, ageUnderEi, ageUnderTw }) => {
    return (
        <form onSubmit={isValid && !errors?.phone ? handleSubmit(onSubmit) : (e) => (e.preventDefault())}>
            <StudentInfo clearErrors={clearErrors} setError={setError} isValideDate={isValideDate} c={c} watch={watch} register={register} errors={errors} now={now} ageUnderTw={ageUnderTw} />
            {!ageUnderEi && watch('day') && watch('month') && (now.getFullYear() - 100 <= watch('year')) && (watch('year') <= now.getFullYear() - 5) && !errors?.day && !errors?.month && !errors?.year ? <Payment selected={selected} setSelected={setSelected} c={c} errors={errors} register={register} /> : null}
            {ageUnderEi || watch('payment') === 'parent' ?
                <ParentInfo clearErrors={clearErrors} setError={setError} c={c} ageUnderEi={ageUnderEi} register={register} errors={errors} watch={watch} now={now} />
                :
                null
            }

            <CheckboxInputs checkerOne={checkerOne} checkerTwo={checkerTwo} setCheckerOne={setCheckerOne} setCheckerTwo={setCheckerTwo} c={c} ageUnderEi={ageUnderEi} register={register} />
            <Button isValid={isValid} c={c} errors={errors} />
        </form>
    )
}