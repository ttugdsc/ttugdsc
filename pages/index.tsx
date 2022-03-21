import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import { Button, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import SocialButton from "../components/SocialButton";
import Students from "../assets/images/smiling.jpg";
import Navbar from "../components/Navbar";

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
        <Paper elevation={2}>
          <Grid
            container
            direction={{ md: "row" }}
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
        <Paper elevation={2}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            sx={{ maxHeight: "40%" }}
          >
            <Grid container xs={5} my={2}>
              <Typography variant="h6">Our Goal</Typography>
              <Typography variant="body1">
                The purpose of the Google DSC is to teach technologies to
                students of all majors, host study jams, provide Google
                certifications, tech talks, workshops by Google experts. The
                organization will also be actively working on projects to create
                solutions for real-life problems using Google technology using
                Google&apos;s resources.
                <br />
                The goal is to bridge the gap between theory and application by
                gaining real-life experience, building projects to help the
                community, and making students ready for taking the first step
                into their professional career.
              </Typography>
            </Grid>
            <Grid container xs={4} my={2} direction="column">
              <Typography variant="h6">Follow Us</Typography>
              <Grid container sx={{ my: 5, ml: 0 }}>
                <SocialButton
                  link="https://techconnect.dsa.ttu.edu/organization/dsc"
                  label="Tech Connect"
                  icon={<SchoolIcon />}
                />
                <SocialButton
                  link="https://twitter.com/ttugdsc"
                  label="Twitter"
                  icon={<TwitterIcon />}
                />
                <SocialButton
                  link="https://discord.gg/nTSWsXGNeQ"
                  label="Discord"
                  icon={<ForumIcon />}
                />
                <SocialButton
                  link="https://www.youtube.com/channel/UCMjXs7pB9-E9wmpALv41aWg"
                  label="YouTube"
                  icon={<YouTubeIcon />}
                />
                <SocialButton
                  link="https://github.com/ttugdsc"
                  label="Github"
                  icon={<GitHubIcon />}
                />
              </Grid>
            </Grid>
            {/*
            TODOs
            Break apart the pages into components
            Add officer photos
            Add footer
            */}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Home;
