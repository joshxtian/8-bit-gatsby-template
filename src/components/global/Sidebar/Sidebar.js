import classNames from "classnames";
import * as React from "react";
import "./Sidebar.css";
import { Link } from "gatsby";
import { sideBarData as data } from "./Sidebar.data";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = () => {
  const sideBarWrapperClassNames = classNames(
    "side-bar",
    "w-1/3 flex justify-center items-center",
  );
  const sideBarInnerClassNames = classNames("side-bar__inner","bg-white p-5 ");
  return (
    <>
      <nav className={sideBarWrapperClassNames}>
        <div className={sideBarInnerClassNames}>
          <ul>
            {data.links.map((item, idx) => (
              <li className="font-cursive first:mt-0 mt-5">
              <Link to={item.route}>
                {item.label.toUpperCase()}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
