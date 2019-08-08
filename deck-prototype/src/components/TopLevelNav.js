import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopLevelNav.module.css';

export default class TopLevelNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.TopLevelNav}>
        <NavLink activeClassName={styles.active} to="/teams/myteam">My Team</NavLink>
        <NavLink activeClassName={styles.active} to="/applications/app">Applications</NavLink>
        <NavLink activeClassName={styles.active} to="#">Properties</NavLink>
      </div>
    )
  }
}