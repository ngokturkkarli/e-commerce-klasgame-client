import React from 'react';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`w-[1440px] ${className}`}>{children}</div>;
};

export default Container;
