import React from 'react';
import './Drawer.less';


export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.history.push(this.props.match.url.substring(0, this.props.match.url.lastIndexOf('/')));
  }

  render() {
    return (
      <div className="Drawer" style={{ width: this.props.drawerWidth }}>
        <div className="drawer-header">
          <div className="header-icon-area">
            { this.props.icon && <i className={`icon-${this.props.icon}`} style={{fontSize: "48px", margin: "0 12px"}}/> }
          </div>
          <div className="header-title-area">
            <div className="header-title">{this.props.title}</div>
            { this.props.subTitle && <div className="header-subtitle">{this.props.subTitle}</div> }
          </div>
          <div className="header-close-area">
            <div className="header-close" onClick={this.close}>
              <i className="ico icon-close"/>
            </div>
          </div>
        </div>
        <div className="body">
          {this.props.children}
        </div>
        <div className="scroll-fader"/>
      </div>
    )
  }
}
