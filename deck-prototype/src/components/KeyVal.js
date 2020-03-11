import React from 'react';
import styles from './KeyVal.module.css';

export default function KeyVal({ keyName, val, valLink }) {
  return (
    <div className={styles.KeyVal}>
      <div className={styles.keyName}>
        {keyName}
      </div>
      <div className={styles.val}>
        {valLink && val &&
          <a className="link" href="#" target="_blank">{val}</a>
        }
        {!valLink && val &&
          val
        }
      </div>
    </div>
  )
};