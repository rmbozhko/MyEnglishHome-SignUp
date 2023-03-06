import c from "./MainCont.module.css";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import { HeaderSign } from "./CompForSignUp/HeaderSign";
import { SignUpForm } from "./CompForSignUp/SignUpForm";
import { objectCreating } from "../../function/objectCreating";

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

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
    const dateOfBirthWatch = watch(['year', 'month', 'day']);

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_PATH;
    console.log(TOKEN, AUTH, PATH);
    const representiveCheck = async (representive) => {
        return await fetch(`${PATH}/studentrepresentatives?phoneNumber=${representive.phoneNumber}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-Token': TOKEN,
                'Authorization': AUTH
            },
            mode: 'cors'
        })
    }

    const representivePOST = async (representive) => {
        return await fetch(`${PATH}/studentrepresentative`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'X-Token': TOKEN,
                'Authorization': AUTH,
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(representive)
        });
    }

    const studentCheck = async (student) => {
        return await fetch(`${PATH}/students-by?phoneNumber=${student.phoneNumber}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-Token': TOKEN,
                'Authorization': AUTH
            },
            mode: 'cors'
        });
    }

    const studentPOST = async (student) => {
        return await fetch(`${PATH}/student`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'X-Token': TOKEN,
                'Authorization': AUTH,
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(student)
        });
    }

    const onSubmit = async (data) => {
        const representive = ageUnderEi || watch('payment') === 'parent' ? objectCreating({ firstName: data.firstNameParent, secondName: data.secondNameParent, year: data.yearParent, phone: data.phoneParent }) : null;;
        const student = objectCreating({ firstName: data.firstName, secondName: data.secondName, year: data.year, month: data.month, day: data.day, phone: data.phone });
        if (representive) {
            const response = await representiveCheck(representive);
            if (response.status === 404) {
                const responsePOST = await representivePOST(representive);
                if (responsePOST?.status === 200) {
                    student.studentRepresentativeId = responsePOST.data.id;
                } else {
                    setIsSuccess(false);
                    setIsModalVisible(true);
                    setTimeout(() => setIsModalVisible(false), 6000);
                    return;
                }
            } else if (response.status !== 200) {
                setIsSuccess(false);
                setIsModalVisible(true);
                setTimeout(() => setIsModalVisible(false), 6000);
                return;
            }
        }

        const response = await studentCheck(student);
        if (response.status === 404) {
            const responsePOST = await studentPOST(student);
            if (responsePOST.status !== 200) {
                setIsSuccess(false);
                setIsModalVisible(true);
                setTimeout(() => setIsModalVisible(false), 6000);
                return;
            }
        } else if (response.status === 200) {
            setIsSuccess(false);
            setError('phone', { type: 'custom', message: 'Даний номер телефону вже зареєстровано. Вкажіть, будь ласка, інший' })
            return;
        } else {
            setIsSuccess(false);
            setIsModalVisible(true);
            setTimeout(() => setIsModalVisible(false), 6000);
            return;
        }

        //HANDLER POST REQUEST
        setIsSuccess(true);
        setError('phone', { type: 'custom', message: ' Даний номер телефону вже зареєстровано. Вкажіть, будь ласка, інший' })
        setIsModalVisible(true);

        // REDIRECT
        return;
    };

    const [age, setAge] = useState(18);
    const [ageUnderTw, setAgeUnderTw] = useState(false);
    const [ageUnderEi, setAgeUnderEi] = useState(false);
    const [isValideDate, setIsValideDate] = useState(true);
    useEffect(() => {
        setIsValideDate(true);
        const day = watch('day');
        const month = watch('month');
        const year = watch('year');
        if (day === '' || month === '' || year === '') {
            return;
        }
        const dob = new Date(year, month - 1, day);
        const valid = new Date(year, month - 1, 1);
        if (dob.getMonth() !== valid.getMonth()) {
            setIsValideDate(false);
        };
        const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
        setAge(today.getFullYear() - dob.getFullYear());
        if (today < dobnow) {
            setAge(prev => prev - 1);
        };
        age < 12 ? setAgeUnderTw(true) : setAgeUnderTw(false);
        age < 18 ? setAgeUnderEi(true) : setAgeUnderEi(false);
    }, [dateOfBirthWatch, age, watch]);

    return (
        <div className={isModalVisible ? c.cont + ' ' + c.blur : c.cont}>
            <HeaderSign c={c} />
            <SignUpForm clearErrors={clearErrors} setError={setError} isValid={isValid} isValideDate={isValideDate} handleSubmit={handleSubmit} onSubmit={onSubmit} c={c} register={register} watch={watch} errors={errors} now={now} ageUnderEi={ageUnderEi} ageUnderTw={ageUnderTw} />
        </div>
    )
}
