import React from 'react';
import MDHistoryTable from './MDHistoryTable.js';
import styles from './Modal.module.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction(event){
    if (event.keyCode === 27) {
      this.props.toggleDemoModal();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div className={styles.Modal}>
      
        <div className={styles.frame}>
          <div className={styles.header}>
            <div className={styles.title}>
              Managed Delivery History
            </div>
            <div className={styles.close} onClick={this.props.toggleDemoModal}>
              <i className="ico icon-close"/>
            </div>
          </div>

          <div className={styles.body}>
            <MDHistoryTable isMobile={this.props.isMobile}/>
          </div>

          <div className={styles.footer}>

          </div>
        </div>
      </div>
    )
  }
}