import c from "./MainCont.module.css";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { HeaderSign } from "./CompForSignUp/HeaderSign";
import { SignUpForm } from "./CompForSignUp/SignUpForm";
import { useBirthdate } from "../../hooks/useBirthdate";
import { onSubmitFunc } from "../../function/onSubmitFunc";

const now = new Date();

export const MainCont = ({ setIsSuccess, isModalVisible, setIsModalVisible }) => {
    const {
        register,
        setError,
        clearErrors,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        watch,

    } = useForm({ mode: 'onBlur' });

    const [ageUnderTw, setAgeUnderTw] = useState(false);
    const [ageUnderEi, setAgeUnderEi] = useState(false);
    const [isValideDate, setIsValideDate] = useState(true);

    useBirthdate(watch, now, setIsValideDate, setAgeUnderTw, setAgeUnderEi);

    const onSubmit = (data) => onSubmitFunc(data, ageUnderEi, watch, setIsSuccess, setIsModalVisible, setError);

    return (
        <div className={isModalVisible ? c.cont + ' ' + c.blur : c.cont}>
            <HeaderSign c={c} />
            <SignUpForm clearErrors={clearErrors} setError={setError} isValid={isValid} isValideDate={isValideDate} handleSubmit={handleSubmit} onSubmit={onSubmit} c={c} register={register} watch={watch} errors={errors} now={now} ageUnderEi={ageUnderEi} ageUnderTw={ageUnderTw} />
        </div>
    )
}
