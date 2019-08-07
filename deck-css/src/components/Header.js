import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import TopLevelNav from './TopLevelNav';
import styles from './Header.module.css';
import Modal from './Modal';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDemoModal = this.toggleDemoModal.bind(this);

    this.state = {
      isDemoModalOpen: false
    };
  }

  toggleDemoModal() {
    this.setState({isDemoModalOpen: !this.state.isDemoModalOpen});
  }

  render() {
    const btnClasses = classNames(styles.menuButton, {
      [styles.open]: this.props.isSideNavOpen,
      [styles.disabled]: !this.props.isAppPath && !this.props.isMobile
    });

    const closeClasses = classNames({
      'ico': true,
      'icon-menu-close': this.props.isSideNavOpen,
      'icon-menu': !this.props.isSideNavOpen
    });

    return (
      <div className={styles.Header}>
        <div className={btnClasses} onClick={this.props.toggleSideNav}>
           <i className={closeClasses}/>
        </div>
        <Link className={styles.logo} to="/">Spinnaker</Link>
        { !this.props.isMobile && <TopLevelNav/> }


        <button onClick={this.toggleDemoModal}>Test Modal</button>

        { //placeholder to mock out modal
          this.state.isDemoModalOpen && <Modal toggleDemoModal={this.toggleDemoModal} isMobile={this.props.isMobile} />
        }
      </div>
    )
  }
}