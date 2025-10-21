import React from 'react';

export const Sheet = ({ children }: { children?: React.ReactNode }) => <div>{children}</div>;
export const SheetContent = Sheet;
export const SheetTrigger = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} />
);

export default Sheet;
