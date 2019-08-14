import React from 'react';
import { Link } from 'react-router-dom';
import Sticky from './Sticky';
import classNames from 'classnames';

import cssFunctionRow from './FunctionRow.module.css';
import cssVariables from './_variables.module.css';

let styles = {};
Object.assign(styles, cssFunctionRow, cssVariables);



export default class FunctionRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpandedState = this.toggleExpandedState.bind(this);

    this.state = {
      isExpanded: false
    };
  }

  toggleExpandedState() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  render() {
    const mainRowClasses = classNames(styles.mainRow, {
      [styles.mainRowExpanded]: this.state.isExpanded
    });

    console.log('styles.colorBg '+ styles.colorBg);

    return (
      <div className={styles.FunctionRow}>

        <Sticky top="132px" mobileTop="88px" isMobile={this.props.isMobile} backgroundColor={styles.colorBg}>

          <div className={mainRowClasses} onClick={this.toggleExpandedState}>
            <span className={styles.iconContainer}>
              <i className="ico icon-lambda"/>
            </span>

            <span className={styles.functionName}>
              US-WEST-1 <span className={styles.divider}>|</span> FunctionNameA
            </span>

            <span className={styles.iconContainer}>
              { this.state.isExpanded
                ? <i className="ico icon-arrow-expanded"/>
                : <i className="ico icon-arrow-collapsed"/>
              }
            </span>
          </div>

        </Sticky>


        {this.state.isExpanded &&
          <>
            <Link to={`${this.props.match.url}/functionName`} className={styles.version}>
              <div><span className="verPill">v058</span></div>
              <div>$PROD</div>
              <div></div>
              <div></div>
            </Link>

            <Link to={`${this.props.match.url}/functionName`} className={styles.version}>
              <div><span className="verPill">v057</span></div>
              <div>$PROD</div>
              <div></div>
              <div></div>
            </Link>

            <Link to={`${this.props.match.url}/functionName`} className={styles.version}>
              <div><span className="verPill">v056</span></div>
              <div>$PROD</div>
              <div></div>
              <div></div>
            </Link>
          </>
        }


      </div>
    )
  }
}
