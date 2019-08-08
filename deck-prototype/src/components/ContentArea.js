import React from 'react';
import styles from './ContentArea.module.css';


export default class ContentArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.ContentArea} style={{ flex: `1 1 ${this.props.contentWidth}` }}>
        <div style={{ flex: `0 1000 ${this.props.drawerWidth}` }}></div>
        <div className={styles.content} style={{ flex: `0 1 ${this.props.contentWidth}` }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
