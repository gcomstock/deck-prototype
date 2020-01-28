import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import TopLevelNav from './TopLevelNav';
import styles from './Header.module.css';
import Modal from './Modal';
import SearchBar from './SearchBar';


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
      [styles.open]: this.props.isSideNavOpen
    });

    const closeClasses = classNames({
      'ico': true,
      'icon-menu-close': this.props.isSideNavOpen,
      'icon-menu': !this.props.isSideNavOpen
    });

    const leftSectionClasses = classNames({
      [styles.leftSection]: true,
      [styles.leftSectionClosed]: !this.props.isSideNavOpen
    });

    return (
      <div className={styles.Header}>
        <div className={leftSectionClasses}>
          <div className={btnClasses} onClick={this.props.toggleSideNav}>
            <i className={closeClasses}/>
          </div>
          <Link className={styles.logo} to="/">Spinnaker</Link>
        </div>

        <div className={styles.centerSection}>
          <SearchBar setActiveQuery={this.props.setActiveQuery} activeQuery={this.props.activeQuery} />
        </div>


        {/* <button onClick={this.toggleDemoModal}>MD History</button> */}
        { //placeholder to mock out modal
          this.state.isDemoModalOpen && <Modal toggleDemoModal={this.toggleDemoModal} isMobile={this.props.isMobile} />
        }
      </div>
    )
  }
}