import c from "./MainCont.module.css";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import { HeaderSign } from "./CompForSignUp/HeaderSign";
import { SignUpForm } from "./CompForSignUp/SignUpForm";

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export const MainCont = ({ setIsModalVisible }) => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        watch,

    } = useForm({ mode: 'onChange' });
    const dateOfBirthWatch = watch(['year', 'month', 'day']);

    const onSubmit = (data) => {
        setIsModalVisible(true);
        alert(JSON.stringify(data))
    };

    const [age, setAge] = useState(18);
    const [ageUnderTw, setAgeUnderTw] = useState(false);
    const [ageUnderEi, setAgeUnderEi] = useState(false);
    useEffect(() => {
        const day = watch('day');
        const month = watch('month');
        const year = watch('year');
        if (day === '' || month === '' || year === '') {
            return;
        }
        const dob = new Date(year, month, day);
        const dobnow = new Date(today.getFullYear(), dob.getMonth() - 1, dob.getDate());
        setAge(today.getFullYear() - dob.getFullYear());
        if (today < dobnow) {
            setAge(prev => prev - 1);
        };
        age < 13 ? setAgeUnderTw(true) : setAgeUnderTw(false);
        age < 18 ? setAgeUnderEi(true) : setAgeUnderEi(false);
    }, [dateOfBirthWatch, age, watch]);

    return (
        <div className={c.cont}>
            <HeaderSign c={c} />
            <SignUpForm handleSubmit={handleSubmit} onSubmit={onSubmit} c={c} register={register} watch={watch} errors={errors} now={now} ageUnderEi={ageUnderEi} ageUnderTw={ageUnderTw} />
        </div>
    )
}
