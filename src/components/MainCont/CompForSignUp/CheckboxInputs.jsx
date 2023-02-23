export const CheckboxInputs = ({ c, ageUnderEi, errors, register }) => {
    return (
        <>
            <div className={c.check}>
                <input className={c.customCheckbox} id="contract" name="contract" type="checkbox" {...register("contract", { required: true })} />
                <label htmlFor="contract">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VOXLZEnl7hI-sLmddRXSR0vLhGcG736_/edit">договору про навчання в студії “My English Home”</a></label>
                {(errors?.contract) && <i className="material-icons">&#xe002;</i>}
            </div>
            <div className={c.check}>
                <input className={c.customCheckbox} id="behavior" name="behavior" type="checkbox" {...register("behavior", { required: true })} />
                <label htmlFor="behavior">Я{ageUnderEi ? ', як представник, ' : null} погоджуюсь з&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/13cx8LsKCIvad_B45bRm3KLuTZiTOLcHC/edit">правилами поведінки в студії “My English Home”</a></label>
                {(errors?.behavior) && <i className="material-icons">&#xe002;</i>}
            </div>
        </>
    )
}
