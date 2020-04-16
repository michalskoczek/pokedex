import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  return (
    <button className={`${props.name}`} onClick={props.click}>
      {props.title.toUpperCase()}
    </button>
  );
};

export default Button;
