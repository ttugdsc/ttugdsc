import Socials from "../components/Socials";
import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <>
      {/*Metadata on the page*/}
      <Head>
        <title>Home - TTU GDSC</title>
        <meta content="Landing page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
      <Grid container direction="column">
        <Hero />
        <Socials />
        <Team />
      </Grid>
    </>
  );
};
{
  /*
TODOs
Organize components by page
Add officer photos
Add footer
Make responsive
*/
}
export default Home;
