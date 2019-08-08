import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './SideNavLink.module.css';


export default function SideNavLink(props) {
  const count = props.count && props.count > 99 ? '99+' : props.count;

  return (
    <NavLink className={styles.SideNavLink} activeClassName={styles.active} to={props.to}>
      <div className={styles.notification}>
        {count && <div className={styles.count}>{count}</div> }
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
    </NavLink>
  );
}