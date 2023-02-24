import React from 'react';

export const NameInput = ({ register, title, firstName, secondName, errors, req, c, }) => {
    return (
        <>
            <span>{title}<span className={c.neces}>&#9913;</span></span>


            <div className={c.center}>
                <input {...register(firstName, { required: { value: req, message: "Заповніть поле." }, maxLength: 30, pattern: { value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: "Можна використовувати лише українські/російські букви, знаки тире та апостроф." }, })} className={c.name} placeholder="Ім'я" maxLength="30" />
                <input {...register(secondName, { required: { value: req, message: "Заповніть поле." }, maxLength: 30, pattern: { value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: "Можна використовувати лише українські/російські букви, знаки тире та апостроф." }, })} className={c.name} type="text" placeholder="Прізвище" maxLength="30" />
                {(errors?.[secondName] || errors?.[firstName]) && <><i className="material-icons">&#xe002;</i><span>{errors?.firstName?.message || errors?.secondName?.message}</span></>}
            </div>
        </>
    )
}
