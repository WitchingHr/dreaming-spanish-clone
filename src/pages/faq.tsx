import React, {FC } from "react";
import Head from "next/head";
import Header from "../components/Header";

const FAQ: FC = () => {
  return (
    <>
      <Head>
        <title>Freaquently Asked Questions | Dreaming Spanish</title>
      </Head>
      <Header gray sticky />
      <h1>FAQ</h1>
    </>
  );
};

export default FAQ;
