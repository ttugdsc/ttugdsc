import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import Head from "next/head";

import Socials from "../components/home/Socials";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Team from "../components/home/Team";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      {/*Metadata on the page*/}
      <Head>
        <title>Home - TTU GDSC</title>
        <meta content="Landing page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Grid container direction="column">
        <Navbar />
        <Hero />
        <Socials />
        <Team />
        <Footer />
      </Grid>
    </>
  );
};
export default Home;
