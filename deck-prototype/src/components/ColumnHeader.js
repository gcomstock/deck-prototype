import React from 'react';
import styles from './ColumnHeader.module.css';

export default function ColumnHeader({ text, icon }) {

  return (
    <div className={styles.ColumnHeader}>
      {icon &&
      <i className={`ico icon-${icon} ${styles.icon}`}/>
      }
      {text &&
      <span className={styles.text} style={icon && {marginRight: '56px'}}>{text}</span>
      }
    </div>
  )
};