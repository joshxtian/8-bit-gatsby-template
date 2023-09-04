import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return <Layout>I am the index</Layout>;
};

export default IndexPage;

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
  </>
);
