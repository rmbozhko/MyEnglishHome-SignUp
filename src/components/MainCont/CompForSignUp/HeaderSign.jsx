import React from 'react'

export const HeaderSign = ({ c }) => {
    return (
        <>
            <div className={c.formsName}><h3>Форма реєстрації для навчання</h3></div>
            <div className={c.necesCont}><span className={c.neces}>&#9913;</span> Обов'язково заповніть</div>
        </>
    )
}
