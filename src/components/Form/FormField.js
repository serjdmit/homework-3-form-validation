import React from 'react';

export default function FormField(props) {
    return (
        <p className="field">
            <label htmlFor={props.inputName} className="field__label"><span className="field-label">{props.fieldName}</span></label>
            <input
                type={props.inputType}
                className={`field__input field-input t-input-${props.inputClass}`}
                name={props.inputName}
                value={props.inputValue}
                onChange={props.handleChange}/>
            <span className={`field__error field-error t-error-${props.inputClass}`}>
                {(function(){
                    if (props.submited && props.fieldValue === '') {
                        return props.emptyName
                    }
                    if (props.submited && props.fieldValue.toLowerCase() !== props.check) {
                        return props.wrongName
                    }
                })()}
            </span>
        </p>
    )
}