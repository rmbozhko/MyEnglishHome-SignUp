import React from 'react';

export const NameInput = ({ register, title, firstName, secondName, errors, req, c, }) => {
    return (
        <>
            <span>{title}<span className={c.neces}>&#9913;</span></span>


            <div className={c.center}>
                <input {...register(firstName, { required: req, maxLength: 20, pattern: /^([А-Я]{1}[а-яёієї]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} placeholder="Ім'я" maxLength="20" />
                <input {...register(secondName, { required: req, maxLength: 20, pattern: /^([А-Я]{1}[а-яёієї]{1,23}|[A-Z]{1}[a-z]{1,23})$/, })} className={c.name} type="text" placeholder="Прізвище" maxLength="20" />
                {(errors?.[secondName] || errors?.[firstName]) && <i className="material-icons">&#xe002;</i>}
            </div>
        </>
    )
}
