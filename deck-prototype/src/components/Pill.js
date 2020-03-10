import React from 'react';
import styles from './Pill.module.css';

export default function Pill({ text, bgColor = '#666666', textColor = '#ffffff' }) {
  return (
    <div className={styles.Pill} style={{backgroundColor: bgColor, color: textColor}}>
      {text}
    </div>
  )
};