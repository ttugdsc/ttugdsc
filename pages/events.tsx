import Navbar from "../components/Navbar";
import { Parallax } from "react-parallax";
import type { NextPage } from "next";
import Head from "next/head";
import smiling from "../public/images/smiling.jpg";

const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>Events - TTU GDSC</title>
        <meta content="Event page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
      <Parallax
        blur={10}
        bgImage="../images/smiling.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        Content goes here. Parallax height grows with content height.
      </Parallax>
    </>
  );
};

export default Events;
