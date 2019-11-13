import React from 'react';

import cssComponent from './Button.module.css';
import cssVariables from './_variables.module.css';
let styles = {};
Object.assign(styles, cssComponent, cssVariables);


export default function Button({ text, icon }) {
  return (
    <div className={styles.Button}>
      {icon &&
      <i className={`ico icon-${icon}`}/>
      }
      {text}
    </div>
  )
};