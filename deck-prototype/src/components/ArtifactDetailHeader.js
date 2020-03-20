import React from 'react';
import styles from './ArtifactDetailHeader.module.css';
import { ReactComponent as IconArtifact } from '../assets/icons/artifact.svg';
import { ReactComponent as IconClose } from '../assets/icons/close.svg';
import Icon from './Icon';

export default function ArtifactDetailHeader({ name, version, clickHandler}) {

  return (
    <div className={styles.ArtifactDetailHeader}>
      <div className={styles.leftGrouping}>
        <Icon name="artifact" fill="white" size="40" />
        <span className={styles.versionPill}>{version}</span>
      </div>

      <div className={styles.centerGrouping}>
        Overview of {name}
      </div>

      <div className={styles.close} onClick={clickHandler}>
        <Icon name="close" fill="white" size="24" />
      </div>
    </div>
  )
};