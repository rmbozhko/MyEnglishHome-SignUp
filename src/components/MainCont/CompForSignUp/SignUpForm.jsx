import { Button } from './Button';
import { CheckboxInputs } from "./CheckboxInputs";
import { ParentInfo } from './ParentInfo';
import { Payment } from './Payment';
import { StudentInfo } from './StudentInfo';

export const SignUpForm = ({ handleSubmit, onSubmit, c, register, watch, errors, now, ageUnderEi, ageUnderTw }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StudentInfo c={c} watch={watch} register={register} errors={errors} now={now} ageUnderTw={ageUnderTw} />
            <Payment c={c} errors={errors} register={register} />
            {ageUnderEi || watch('payment') === 'parent' ?
                <ParentInfo c={c} ageUnderEi={ageUnderEi} register={register} errors={errors} watch={watch} now={now} />
                :
                null
            }

            <CheckboxInputs c={c} ageUnderEi={ageUnderEi} errors={errors} register={register} />
            <Button c={c} errors={errors} />
        </form>
    )
}
