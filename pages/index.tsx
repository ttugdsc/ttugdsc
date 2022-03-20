import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, CardContent, CardHeader } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import Students from "../assets/images/smiling.jpg";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - TTU GDSC</title>
        <meta content="Landing page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
      <Grid container>
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid container sx={{ width: "50%" }}>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardHeader title={"Google Developer Student Club"} />
              <CardContent>Texas Tech University</CardContent>
            </Card>
          </Grid>
          <Grid container sx={{ width: "50%" }}>
            <Image src={Students} alt="Happy coding students" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
