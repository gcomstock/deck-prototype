import React from 'react';
import styles from './RuledSubHeader.module.css';


export default class RuledSubHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  toggle() {
    this.props.history.push(this.props.match.url.substring(0, this.props.match.url.lastIndexOf('/')));
  }

  render() {
    return (
      <div className={styles.RuledSubHeader} onClick={this.toggle}>
        {this.props.text}
      </div>
    )
  }
}
