import React from 'react';

export const TooltipProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export default TooltipProvider;
