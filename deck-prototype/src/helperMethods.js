import React from 'react';
import StatusBubble from './components/StatusBubble';


export const renderStatusBubbles = (statuses, size, maxLength) => {
  return (
    <>
    {statuses.map((status) => (
      <StatusBubble
        level={status.level}
        icon={status.icon}
        hoverText={status.hoverText}
        fullText={status.fullText}
        qty={status.qty}
        size={status.size || size}
      />
    ))}
    </>
  )
};