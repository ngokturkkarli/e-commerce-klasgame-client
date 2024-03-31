import React from 'react';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-[calc(100%-50px)] sm:w-[640px] lg:px-0 md:w-[718px] lg:w-[974px] xl:w-[1230px] 2xl:w-[1440px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
