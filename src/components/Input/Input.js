import classNames from "classnames";
import * as React from "react";
import "./Input.css";
const Input = ({ className, children, type, placeholder, onChange }) => {
  const inputClassNames = classNames("input outline-none p-2", className);
  return !!children ? (
    <input className={inputClassNames} type={type} placeholder={placeholder} onChange={onChange} >
      {children}
    </input>
  ) : (
    <input className={inputClassNames} type={type} placeholder={placeholder} onChange={onChange} />
  );
};

export default Input;
