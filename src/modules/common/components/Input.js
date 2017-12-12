import React from 'react';

const Input = ({value, name, type, textLabel, onChange, icon}) => {
    return (
        <div className="input-field">
            {
                icon ? <i className="material-icons prefix">{icon}</i> : null
            }
            <input
                value={value}
                name={name}
                className="validate"
                onChange={onChange}
                id={name}
                type={type}/>
            <label htmlFor={name} data-error="invalid"
                   className="center-align">{textLabel}</label>
        </div>
    )
};

export default Input;