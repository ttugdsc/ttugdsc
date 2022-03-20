import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
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
        <Paper elevation={2}>
          <Grid
            container
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx={{ maxHeight: "50%" }}
          >
            <Grid container sx={{ width: "50%", height: "100%" }} columns={3}>
              <Paper elevation={0} sx={{ width: "100%", p: 10 }}>
                <Typography variant="h2" gutterBottom component="div">
                  Google Developer Student Club
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                  Texas Tech University
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 7, width: "80%" }}
                  size="large"
                  href="https://linktr.ee/ttudsc"
                  target="_blank"
                >
                  Become a Member
                </Button>
              </Paper>
            </Grid>
            <Grid container sx={{ width: "50%" }}>
              <Image src={Students} alt="Happy coding students" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Home;
