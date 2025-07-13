import React from "react";

function Wrapper({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <div className="px-56">{children}</div>;
}

export default Wrapper;
