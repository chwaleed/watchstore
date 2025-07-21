import React, { ReactNode } from "react";

function AppWrapper({
  children,
  className,
}: {
  children: ReactNode | ReactNode[];
  className: string;
}) {
  return (
    <section className={` ${className} max-w-[1400px] px-20 xl:px-0 mx-auto`}>
      {children}
    </section>
  );
}

export default AppWrapper;
