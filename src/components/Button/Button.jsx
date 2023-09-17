import React from 'react';
import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ primary, alert, succes, children }) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.primary]: primary,
        [css.alert]: alert,
      })}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
