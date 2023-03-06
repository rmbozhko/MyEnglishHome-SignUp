import React from 'react';
import { onChangeInputName } from '../../../function/nameInput';

export const NameInput = ({ clearErrors, watch, setError, register, title, firstName, secondName, errors, req, c, }) => {
    return (
        <>
            <span>{title}<span className={c.neces}>&#9913;</span></span>


            <div className={c.center}>
                <input {...register(firstName, { onChange: () => { onChangeInputName(watch(firstName), setError, clearErrors, firstName) }, required: { value: req, message: "Заповніть поле" }, maxLength: 30, pattern: { value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: "Поле може містити тільки літери, апостроф та тире" }, })} className={`${c.name} + ' ' + ${errors?.[firstName] ? c.inputError : null}`} placeholder="Ім'я" maxLength="30" />
                <input {...register(secondName, { onChange: () => { onChangeInputName(watch(secondName), setError, clearErrors, secondName) }, required: { value: req, message: " Заповніть поле" }, maxLength: 30, pattern: { value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: " Поле може містити тільки літери, апостроф та тире" }, })} className={`${c.name} + ' ' + ${errors?.[secondName] ? c.inputError : null}`} type="text" placeholder="Прізвище" maxLength="30" />
            </div>
            {errors?.[firstName] || errors?.[secondName] ? <div className={c.center}>
                <div className={`${c.error} + ' ' + ${c.nameError}`}>{errors?.[firstName] && <><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.[firstName]?.message}</span></>}</div>
                <div className={`${c.error} + ' ' + ${c.nameError}`}>{errors?.[secondName] && <><i className="material-icons">&#xe002;</i>&nbsp;&nbsp;<span>{errors?.[secondName]?.message}</span></>}</div>
            </div> : null}
        </>
    )
}
