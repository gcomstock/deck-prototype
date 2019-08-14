import React from 'react';
import styles from './RuledSubHeader.module.css';
import classNames from 'classnames';


export default class RuledSubHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExpandedState = this.toggleExpandedState.bind(this);

    this.state = {
      isExpanded: true
    };
  }

  toggleExpandedState() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  renderHeaderType() {
    const classes = classNames(styles.RuledSubHeader, {
      [styles.canToggle]: this.props.canToggle
    });

    const inlineStyles = {
      top: this.props.isMobile ? this.props.mobileTop : this.props.top,
      position: this.props.isSticky ? 'sticky' : 'relative',
      backgroundColor: this.props.backgroundColor
    };

    if (this.props.canToggle) {
      return (
        <div className={classes} onClick={this.toggleExpandedState} style={inlineStyles}>
          {this.props.text}
          <div>
            { this.state.isExpanded
              ? <i className="ico icon-arrow-expanded"/>
              : <i className="ico icon-arrow-collapsed"/>
            }
          </div>
        </div>
      )
    }
    return (
      <div className={classes} style={inlineStyles}>
        {this.props.text}
      </div>
    )
  }


  render() {
    return (
      <>
        {this.renderHeaderType()}
        {this.state.isExpanded && this.props.children}
      </>
    )
  }
}
