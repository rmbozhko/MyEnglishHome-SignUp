import { CheckboxInputs } from "./CheckboxInputs";
import { Info } from './Info';
import { ParentInfo } from './ParentInfo';
import { Payment } from './Payment';
import { StudentInfo } from './StudentInfo';

export const SignUpFormMobile = ({ checkerOne, checkerTwo, setCheckerOne, setCheckerTwo, selected, setSelected, page, setPage, isMobile, clearErrors, setError, isValid, isValideDate, handleSubmit, onSubmit, c, register, watch, errors, now, ageUnderEi, ageUnderTw }) => {

    //pages:
    //1 === student info
    //2 === payment
    //3 === checkbox
    //4 === parent info
    //5 === teen
    const onRight = (pageNum) => {
        switch (pageNum) {
            case 1:
                if (watch('firstName') && watch('secondName') && watch('day') && watch('month') && watch('phone') && watch('year') && !errors?.firstName && !errors?.secondName && !errors?.day && !errors?.month && !errors?.year && !errors?.phone) {
                    if (!ageUnderEi) {
                        return () => setPage(2);
                    }
                    return () => setPage(5);
                }
                return;
            case 2:
                if (watch('payment') === 'student') {
                    return () => setPage(3);
                }
                return () => setPage(4);
            case 3:
                if (watch('contract') && watch('behavior')) {
                    return handleSubmit(onSubmit);
                }
                return;
            case 4:
                if (watch('firstNameParent') && watch('secondNameParent') && watch('phoneParent') && watch('yearParent') && !errors?.firstNameParent && !errors?.secondNameParent && !errors?.yearParent && !errors?.phoneParent) {
                    return () => setPage(3);
                }
                return;
            case 5:
                return () => setPage(4);
            default:
                break;
        }
    }

    const onLeft = (pageNum) => {
        switch (pageNum) {
            case 1:
                break;
            case 2:
                return () => setPage(1);
            case 3:
                if (watch('payment') === 'student') {
                    return () => setPage(2);
                }
                return () => setPage(4);
            case 4:
                if (ageUnderEi) {
                    return () => setPage(5);
                }
                return () => setPage(2);
            case 5:
                return () => setPage(1);
            default:
                break;
        }
    }

    const classButton = (pageNum) => {
        switch (pageNum) {
            case 1:
                return (watch('firstName') && watch('secondName') && watch('day') && watch('month') && (ageUnderTw || (watch('phone'))) && watch('year') && !errors?.firstName && !errors?.secondName && !errors?.day && !errors?.month && !errors?.year && !errors?.phone) ? c.buttonOne : c.buttonOneNone;
            case 2:
                return c.buttonCustomRight;
            case 3:
                return (watch('contract') && watch('behavior')) ? c.buttonCustomRight : c.buttonCustomRightNone;
            case 4:
                return (watch('firstNameParent') && watch('secondNameParent') && watch('phoneParent') && watch('yearParent') && !errors?.firstNameParent && !errors?.secondNameParent && !errors?.yearParent && !errors?.phoneParent) ? c.buttonCustomRight : c.buttonCustomRightNone;
            case 5:
                return c.buttonCustomRight;
            default:
                break;
        }
    }

    return (
        <>
            <form>
                {page === 1 && <><div className={c.center}>
                    <span className={c.fillform}>Заповніть дані студента</span>
                </div><StudentInfo isMobile={isMobile} clearErrors={clearErrors} setError={setError} isValideDate={isValideDate} c={c} watch={watch} register={register} errors={errors} now={now} ageUnderTw={ageUnderTw} /></>}
                {page === 2 && <div className={c.center}><Payment selected={selected} setSelected={setSelected} isMobile={isMobile} c={c} errors={errors} register={register} />{watch('payment') === 'parent' && <div className={c.info}><Info /></div>}</div>}
                {page === 3 && <div className={c.center}><p className={c.fillform}>Обов'язково ознайомтесь</p><div className={c.checkCenter}><CheckboxInputs checkerOne={checkerOne} checkerTwo={checkerTwo} setCheckerOne={setCheckerOne} setCheckerTwo={setCheckerTwo} isMobile={isMobile} c={c} ageUnderEi={ageUnderEi} register={register} /></div></div>}
                {page === 4 && <><div className={c.center}><span className={c.fillform}>Заповніть дані представника</span></div><ParentInfo isMobile={isMobile} clearErrors={clearErrors} setError={setError} c={c} ageUnderEi={ageUnderEi} register={register} errors={errors} watch={watch} now={now} /></>}
                {page === 5 && <><div className={c.center}><span className={c.fillform}>Студент - неповнолітній</span><div className={c.need}>Необхідно внести дані про його представника.</div><div className={c.info}><Info /></div></div></>}
            </form>
            <div className={c.buttonCont}>{page !== 1 && <button className={c.buttonCustomLeft} onClick={onLeft(page)}>Назад</button>}<button className={classButton(page)} onClick={onRight(page)}>Далі</button></div>
            <div className={c.nothing}></div>
        </>
    )
}