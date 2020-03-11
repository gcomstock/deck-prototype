import React from 'react';
import styles from './ColumnHeader.module.css';
import Icon from './Icon';


export default function ColumnHeader({ text, icon }) {

  return (
    <div className={styles.ColumnHeader}>
      {icon &&
      <span className={styles.icon}>
        <Icon name={icon} fill="white" width="24px" />
      </span>
      }
      {text &&
      <span className={styles.text} style={icon && {marginRight: '56px'}}>{text}</span>
      }
    </div>
  )
};