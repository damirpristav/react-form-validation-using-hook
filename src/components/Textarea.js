import React from 'react';

const Textarea = props => {
  return(
    <div className="form__group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={props.error ? 'error' : ''}
      ></textarea>
      {props.error && <div className="form__error">{props.error}</div>}
    </div>
  );
}

export default Textarea;