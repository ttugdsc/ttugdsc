import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>Events - TTU GDSC</title>
        <meta content="Event page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
    </>
  );
};

export default Events;
