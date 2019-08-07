import React from 'react';
import './DrawerArea.less';


export default class DrawerArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DrawerArea" style={{ flex: `0 1000 ${this.props.drawerWidth}`}}>
        {this.props.children}
      </div>
    )
  }
}
