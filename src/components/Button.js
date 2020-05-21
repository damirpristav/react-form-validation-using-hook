import React from 'react';

const Button = props => {
  return(
    <button type={props.type} className="btn">{props.title}</button>
  );
}

export default Button;