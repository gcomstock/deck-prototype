import React from 'react';
import styles from './Drawer.module.css';


export default class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  close() {
    this.props.history.push(this.props.match.url.substring(0, this.props.match.url.lastIndexOf('/')));
    this.props.resetMockData();
  }

  render() {
    return (
      <div className={styles.Drawer} style={{ width: this.props.drawerWidth }}>
        <div className={styles.header}>
          <div className={styles.headerIconArea}>
            { this.props.icon && <i className={`ico icon-${this.props.icon}`} style={{fontSize: "48px"}}/> }
          </div>
          <div className={styles.headerTitleArea}>
            <div className={styles.headerTitle}>{this.props.title}</div>
            { this.props.subTitle && <div className={styles.headerSubtitle}>{this.props.subTitle}</div> }
          </div>
          <div className={styles.headerCloseArea}>
            <div className={styles.headerClose} onClick={this.close}>
              <i className="ico icon-close"/>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          {this.props.children}
        </div>
        <div className={styles.scrollFader}/>
      </div>
    )
  }
}
