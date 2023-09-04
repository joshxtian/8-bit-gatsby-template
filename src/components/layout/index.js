import * as React from "react";
import classNames from "classnames";
import { Sidebar } from "../global/Sidebar";

const Layout = ({ children }) => {
    const layoutWrapperClassNames = classNames("h-screen w-screen flex flex-row");
    const layoutContentClassNames = classNames("w-2/3 flex justify-center items-center");
  return (
    <div className={layoutWrapperClassNames}>
      <Sidebar />
      <main className={layoutContentClassNames}>{children}</main>
    </div>
  );
};

export default Layout;
