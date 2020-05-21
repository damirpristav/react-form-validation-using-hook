import React from 'react';

const Checkbox = props => {
  return(
    <div className="form__group form__group--checkbox">
      <label htmlFor={props.id}>
        <input 
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
        />
        <span>{props.label}</span>
      </label>
      {props.error && <div className="form__error">{props.error}</div>}
    </div>
  );
}

export default Checkbox;