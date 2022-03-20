import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - TTU GDSC</title>
        <meta content="Landing page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
    </>
  );
};

export default Home;
