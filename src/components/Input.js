import React from 'react';

const Input = props => {
  return(
    <div className="form__group">
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        type={props.type || 'text'}
        name={props.name}
        id={props.id}
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.error ? 'error' : ''}
      />
      {props.error && <div className="form__error">{props.error}</div>}
    </div>
  );
}

export default Input;