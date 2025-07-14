import React, { ReactNode } from "react";

function AppWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className="px-56">{children}</div>;
}

export default AppWrapper;
