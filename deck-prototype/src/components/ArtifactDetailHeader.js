import React from 'react';
import styles from './ArtifactDetailHeader.module.css';
import Icon from '../assets/Icon.js';

export default function ArtifactDetailHeader({ name, version, clickHandler}) {

  return (
    <div className={styles.ArtifactDetailHeader}>
      <div className={styles.leftGrouping}>
        <Icon name="artifact" fill="white" size="xLarge" />
        <span className={styles.versionPill}>{version}</span>
      </div>

      <div className={styles.centerGrouping}>
        Overview of {name}
      </div>

      <div className={styles.close} onClick={clickHandler}>
        <Icon name="close" fill="white" size="medium" />
      </div>
    </div>
  )
};