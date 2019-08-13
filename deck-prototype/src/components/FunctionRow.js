import React from 'react';
import styles from './FunctionRow.module.css';
import { Link } from 'react-router-dom';


//<Link to={`${this.props.match.url}/functionName`}>a function</Link>

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
    return (
      <div className={styles.FunctionRow}>
        <div className={styles.mainRow}>
          <i className="ico icon-lambda"/>
          US-WEST-1   |   FunctionNameA
        </div>

        <Link to={`${this.props.match.url}/functionName`} className={styles.version}>
          <div>v058</div>
          <div>$PROD</div>
          <div></div>
          <div></div>
        </Link>

        <Link to={`${this.props.match.url}/functionName`} className={styles.version}>
          <div>v058</div>
          <div>$PROD</div>
          <div></div>
          <div></div>
        </Link>

        <Link to={`${this.props.match.url}/functionName`} className={styles.version}>
          <div>v058</div>
          <div>$PROD</div>
          <div></div>
          <div></div>
        </Link>


      </div>
    )
  }
}
