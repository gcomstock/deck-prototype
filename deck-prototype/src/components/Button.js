import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export default function Button({ text, icon, theme, clickHandler }) {
  const buttonClasses = classNames({
    [styles.Button]: true,
    [styles.text]: !!text,
    [styles.iconAndText]: !!(text && icon),
    [styles.themeClear]: theme === 'clear'
  });

  return (
    <div className={buttonClasses} onClick={clickHandler}>
      {icon &&
      <i className={`ico icon-${icon}`}/>
      }
      {text}
    </div>
  )
};