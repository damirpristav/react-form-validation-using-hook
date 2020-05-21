import React from 'react';

const Radio = props => {
  return(
    <div className="form__group form__group--radio">
      <p>{props.label}</p>
      {props.choices.map(choice => (
        <label htmlFor={choice.id} key={choice.id}>
          <input 
            type="radio"
            name={props.name}
            id={choice.id}
            value={choice.value}
            onChange={props.onChange}
            checked={props.checked && props.checked === choice.value}
          />
          <span>{choice.label}</span>
        </label>
      ))}
      {props.error && <span className="form__error">{props.error}</span>}
    </div>
  );
}

export default Radio;