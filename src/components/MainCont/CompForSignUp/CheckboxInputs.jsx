import { useState } from "react"

export const CheckboxInputs = ({ c, ageUnderEi, errors, register }) => {
    const [checkerOne, setCheckerOne] = useState(false);
    const [checkerTwo, setCheckerTwo] = useState(false);
    const setErrorForCheck = (setChecker) => {
        setChecker(prev => !prev);
    }

    return (
        <>
            <div className={c.check}>
                <input className={c.customCheckbox} id="contract" name="contract" type="checkbox" {...register("contract", { onChange: () => { setErrorForCheck(setCheckerOne, checkerOne, 'contract') }, required: true })} />
                <label htmlFor="contract">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VOXLZEnl7hI-sLmddRXSR0vLhGcG736_/edit">договору про навчання в студії “My English Home”</a><span className={c.neces}>&#9913;</span></label>
                {(errors?.contract?.custom || !checkerOne) && <i className="material-icons">&#xe002;</i>}
            </div>
            <div className={c.check}>
                <input className={c.customCheckbox} id="behavior" name="behavior" type="checkbox" {...register("behavior", { onChange: () => { setErrorForCheck(setCheckerTwo, checkerTwo, 'behavior') }, required: true })} />
                <label htmlFor="behavior">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/13cx8LsKCIvad_B45bRm3KLuTZiTOLcHC/edit">правилами поведінки в студії “My English Home”</a><span className={c.neces}>&#9913;</span></label>
                {(errors?.behavior?.custom || !checkerTwo) && <i className="material-icons">&#xe002;</i>}
            </div>
        </>
    )
}
