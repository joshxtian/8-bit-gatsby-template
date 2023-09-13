import * as React from "react";
import "./src/styles/global.css";
import { SearchProvider } from "./src/context/searchContext";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element }) => <SearchProvider><Layout>{element}</Layout></SearchProvider>;

  
