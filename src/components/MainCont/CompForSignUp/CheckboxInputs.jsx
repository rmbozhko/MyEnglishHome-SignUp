import { useState } from "react"

export const CheckboxInputs = ({ c, ageUnderEi, register }) => {
    const [checkerOne, setCheckerOne] = useState([false, false]);
    const [checkerTwo, setCheckerTwo] = useState([false, false]);
    const setErrorForCheck = (setChecker) => {
        setChecker(prev => [!prev[0], true]);
    }

    return (
        <>
            <div className={c.check}>
                <input className={c.customCheckbox} id="contract" name="contract" type="checkbox" {...register("contract", { onChange: () => { setErrorForCheck(setCheckerOne) }, required: true })} />
                <label htmlFor="contract">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VOXLZEnl7hI-sLmddRXSR0vLhGcG736_/edit">договору про навчання в студії “My English Home”</a><span className={c.neces}>&#9913;</span></label>
                {(!checkerOne[0] && checkerOne[1]) && <i className="material-icons">&#xe002;</i>}
            </div>
            <div className={c.check}>
                <input className={c.customCheckbox} id="behavior" name="behavior" type="checkbox" {...register("behavior", { onChange: () => { setErrorForCheck(setCheckerTwo) }, required: true })} />
                <label htmlFor="behavior">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/13cx8LsKCIvad_B45bRm3KLuTZiTOLcHC/edit">правилами поведінки в студії “My English Home”</a><span className={c.neces}>&#9913;</span></label>
                {(!checkerTwo[0] && checkerTwo[1]) && <i className="material-icons">&#xe002;</i>}
            </div>
        </>
    )
}
