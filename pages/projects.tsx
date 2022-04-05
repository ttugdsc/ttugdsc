import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/projects/Hero";
const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - TTU GDSC</title>
        <meta content="Project page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
      <Hero />
    </>
  );
};

export default Projects;
