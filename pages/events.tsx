import Navbar from "../components/Navbar";
import { Parallax } from "react-parallax";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Grid, Stack, Typography } from "@mui/material";

const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>Events - TTU GDSC</title>
        <meta content="Event page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
      <Parallax
        blur={3}
        bgImage="../images/smiling.jpg"
        bgImageAlt="Students working"
        strength={50}
      >
        <Grid container>
          <Grid item xs={5} sx={{ py: 3 }}>
            <Stack direction="column" spacing={4} sx={{ px: 3, mx: "auto" }}>
              <Typography variant="h5" sx={{ color: "#F44336" }}>
                Featured
              </Typography>
              <Typography variant="body1">
                My money big yeah my money tonkaContent goes here. Parallax
                height grows with content height. You know We&apos;re pushing P
                Content goes here. Parallax height grows with content height.
                You know We&apos;re pushing P
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">
              My money big yeah my money tonkaContent goes here. Parallax height
              grows with content height. You know We&apos;re pushing P Content
              goes here. Parallax height grows with content height. You know
              We&apos;re pushing P
            </Typography>
          </Grid>
        </Grid>
      </Parallax>
    </>
  );
};

export default Events;
