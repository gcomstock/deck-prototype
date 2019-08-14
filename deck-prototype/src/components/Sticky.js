import React from 'react';

export default function Sticky(props) {
  const top = props.isMobile ? props.mobileTop : props.top;
  return (
    <div className="Sticky" style={{
      top,
      backgroundColor: props.backgroundColor,
      position: 'sticky',
      overflow: 'auto',
      zIndex: props.zIndex
    }}>
      {props.children}
    </div>
  );
}