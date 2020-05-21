import React from 'react';

const Select = props => {
  return(
    <div className="form__group">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={props.error ? 'error' : ''}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {props.error && <div className="form__error">{props.error}</div>}
    </div>
  );
}

export default Select;