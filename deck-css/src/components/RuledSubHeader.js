import React from 'react';
import './RuledSubHeader.less';


export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  toggle() {
    this.props.history.push(this.props.match.url.substring(0, this.props.match.url.lastIndexOf('/')));
  }

  render() {
    return (
      <div className="RuledSubHeader" onClick={this.toggle}>
        {this.props.children}
      </div>
    )
  }
}
