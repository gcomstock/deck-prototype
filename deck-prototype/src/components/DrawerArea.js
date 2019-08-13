import React from 'react';
import styles from './DrawerArea.module.css';


export default class DrawerArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.DrawerArea} style={{ flex: `0 1000 ${this.props.drawerWidth}`}}>
        {this.props.children}
      </div>
    )
  }
}
