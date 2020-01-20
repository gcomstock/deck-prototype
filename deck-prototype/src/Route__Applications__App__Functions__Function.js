import React from 'react';
import Drawer from './components/Drawer';
import NoticeBubble from './components/NoticeBubble';


export default class Route__App__Functions__Function extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.history.push(this.props.match.url.substring(0, this.props.match.url.lastIndexOf('/')));
  }

  render() {
    return (
      <Drawer
        {...this.props}
        drawerWidth={this.props.drawerWidth}
        icon="lambda"
        title="FunctionName"
        subTitle="MY-AWS-ACCOUNT / US-WEST-2 / v004"
      >
        <NoticeBubble icon="warn-diamond" noticeType="warning" />

        <br/>
        <br/>
        <br/>

        <p>
          <span style={{fontSize: '12px'}}>
            test test test <a target="_blank" href="#">hello world</a> testt esttestest test t test
          </span>

          <br/>
          <br/>

          <span style={{fontSize: '14px'}}>
            test test test <a target="_blank" href="#">hello world</a> testt esttestest test t test
          </span>

          <br/>
          <br/>

          <span style={{fontSize: '16px'}}>
            test test test <a target="_blank" href="#">hello world</a> testt esttestest test t test
          </span>

          <br/>
          <br/>

          <span style={{fontSize: '18px'}}>
            test test test <a target="_blank" href="#">hello world</a> testt esttestest test t test
          </span>

          <br/>
          <br/>

          <span style={{fontSize: '24px'}}>
            test test test <a target="_blank" href="#">hello world</a> testt esttestest test t test
          </span>
        </p>

      </Drawer>
    )
  }
}
