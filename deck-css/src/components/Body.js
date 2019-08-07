import React from 'react';
import styles from './Body.module.css';


export default class Body extends React.Component {

  render() {
    return (
      <div className={styles.Body}>
        {this.props.children}
      </div>
    )
  }
}
