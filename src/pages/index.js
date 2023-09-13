import * as React from "react";
import Layout from "../components/layout";
import { Showcase } from "../components/Showcase";
import { useEffect } from "react";
import { useState } from "react";

const IndexPage = () => {
  return <Showcase />;
};

export default IndexPage;

export const Head = ({ pageContext }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (!!pageContext.title) setTitle(pageContext.title);
  }, [pageContext]);
  return (
    <>
      <title>Pokemon App {!!title && `|| ${title}`} </title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
