import React, { ReactNode } from "react";

function AppWrapper({
  children,
  className,
}: {
  children: ReactNode | ReactNode[];
  className: string;
}) {
  return <section className={`px-56 ${className}`}>{children}</section>;
}

export default AppWrapper;
