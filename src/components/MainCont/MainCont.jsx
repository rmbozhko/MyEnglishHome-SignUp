import c from "./MainCont.module.css";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { HeaderSign } from "./CompForSignUp/HeaderSign";
import { SignUpForm } from "./CompForSignUp/SignUpForm";
import { useBirthdate } from "../../hooks/useBirthdate";
import { onSubmitFunc } from "../../function/onSubmitFunc";
import { SignUpFormMobile } from "./CompForSignUp/SignUpFormMobile";

const now = new Date();

export const MainCont = ({ isMobile, setIsSuccess, isModalVisible, setIsModalVisible }) => {
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
    const [page, setPage] = useState(1);
    const [selected, setSelected] = useState('student');
    const [checkerOne, setCheckerOne] = useState([false, false]);
    const [checkerTwo, setCheckerTwo] = useState([false, false]);

    useBirthdate(watch, now, setIsValideDate, setAgeUnderTw, setAgeUnderEi);

    const onSubmit = (data) => onSubmitFunc(data, ageUnderEi, watch, setIsSuccess, setIsModalVisible, setError, setPage);
    return (
        <div className={isModalVisible ? c.cont + ' ' + c.blur : c.cont}>
            {!isMobile && <HeaderSign c={c} />}
            {!isMobile ? <SignUpForm checkerOne={checkerOne} checkerTwo={checkerTwo} setCheckerOne={setCheckerOne} setCheckerTwo={setCheckerTwo} selected={selected} setSelected={setSelected} isMobile={isMobile} clearErrors={clearErrors} setError={setError} isValid={isValid} isValideDate={isValideDate} handleSubmit={handleSubmit} onSubmit={onSubmit} c={c} register={register} watch={watch} errors={errors} now={now} ageUnderEi={ageUnderEi} ageUnderTw={ageUnderTw} /> : <SignUpFormMobile checkerOne={checkerOne} checkerTwo={checkerTwo} setCheckerOne={setCheckerOne} setCheckerTwo={setCheckerTwo} selected={selected} setSelected={setSelected} page={page} setPage={setPage} isMobile={isMobile} clearErrors={clearErrors} setError={setError} isValid={isValid} isValideDate={isValideDate} handleSubmit={handleSubmit} onSubmit={onSubmit} c={c} register={register} watch={watch} errors={errors} now={now} ageUnderEi={ageUnderEi} ageUnderTw={ageUnderTw} />}
        </div>
    )
}
