import React from 'react';
import ContentArea from './components/ContentArea';
import BoatLoader from './components/BoatLoader';


const DRAWER_WIDTH = '0';
const CONTENT_WIDTH = '1208px';


export default class Route__Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentArea drawerWidth={DRAWER_WIDTH} contentWidth={CONTENT_WIDTH}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
          <BoatLoader width="30%"/>
        </div>
      </ContentArea>
    )
  }
};
