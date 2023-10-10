import React from "react";
import Toolbar from "../navigation/Toolbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Toolbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
