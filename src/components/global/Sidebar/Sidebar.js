import classNames from "classnames";
import * as React from "react";
import "./Sidebar.css";
import { Link } from "gatsby";
import { sideBarData as data } from "./Sidebar.data";
import { Accordion } from "../../Accordion";
import { Input } from "../../Input";
import { useSearchContext } from "../../../context/searchContext";
import { useSearch } from "../../../hooks";

const Sidebar = () => {
  const sideBarWrapperClassNames = classNames(
    "side-bar",
    "w-1/3 flex justify-center items-center",
  );
  const sideBarInnerClassNames = classNames(
    "side-bar__inner",
    "w-[250px] bg-white p-5",
  );
  const { searchCB } = useSearch();
  return (
    <>
      <nav className={sideBarWrapperClassNames}>
        <div className={sideBarInnerClassNames}>
          <ul>
            {data.links.map((item, idx) => {
              if (item.type === "disc") {
                return (
                  <Accordion
                    key={idx}
                    className="first:mt-0 mt-5"
                    label={item.label.toUpperCase()}
                  >
                    <Input
                      className="max-w-full mt-2"
                      onChange={searchCB}
                      type="text"
                      placeholder="Search"
                    />
                  </Accordion>
                );
              }
              return (
                <li key={idx} className="font-cursive first:mt-0 mt-5">
                  <Link to={item.route}>{item.label.toUpperCase()}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
