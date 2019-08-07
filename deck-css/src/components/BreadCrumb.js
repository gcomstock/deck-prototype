import React from 'react';
import styles from './BreadCrumb.module.css';


export default function BreadCrumb(props) {
  return (
    <div className={styles.BreadCrumb}>
      {props.path}
    </div>
  );
}