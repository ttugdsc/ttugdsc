import { Button, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/projects/Hero";
import ProjectTable from "../components/projects/ProjectTable";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - TTU GDSC</title>
        <meta content="Project page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
      <Hero />
      <Grid container sx={{ my: 4 }}>
        <Grid item xs={3}>
          <Typography variant="h5" align="center" sx={{ m: 3 }}>
            Texas Tech Developer Student Club Projects
          </Typography>
          <Typography variant="body1" sx={{ m: 3 }}>
            Projects are meant to be a way for participants and onlookers alike
            to learn how to build in a low risk environment. The goal at the end
            of one of our projects is that you&apos;ll leave equipped and able
            to build with the tool we used.
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ minHeight: "200px", m: 4 }}>
          <ProjectTable />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ width: "35%", mx: "auto", mb: 8, justifyContent: "center" }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            alert(
              "Lmao sorry slime, we don't haven't implemented this bit yet 😶‍🌫️"
            );
          }}
        >
          Request Project
        </Button>
      </Grid>
    </>
  );
};

export default Projects;
