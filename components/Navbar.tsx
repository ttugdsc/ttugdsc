import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Tab,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import EventIcon from "@mui/icons-material/Event";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import Image from "next/image";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [page, setPage] = useState(0); //Track current page
  const router = useRouter();

  //Updates on click and reroutes
  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    event.preventDefault();
    setPage(newPage);
    if (newPage === 0) router.push("/");
    if (newPage === 1) router.push("/projects");
    if (newPage === 2) router.push("/events");
  };

  //Updates page number on initial page load
  useEffect(() => {
    if (router.pathname == "/") setPage(0);
    if (router.pathname == "/projects") setPage(1);
    if (router.pathname == "/events") setPage(2);
  }, [router.pathname]);

  //Custom tabs with box shadow
  const TopTab = styled(Tabs)({
    boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.05)",
  });

  const theme = useTheme();

  return (
    <>
      {
        //If user is on bigger screen, render desktop view, else render mobile.
        useMediaQuery(theme.breakpoints.up("md")) ? (
          <Grid
            container
            direction="column"
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            <Container maxWidth="xs">
              <Image src={Logo} alt="Google Developer Student Club logo" />
            </Container>
            <TopTab
              value={page}
              onChange={handleChange}
              centered
              variant="fullWidth"
            >
              <Tab label="Home" />
              <Tab label="Projects" />
              <Tab label="Events" />
            </TopTab>
          </Grid>
        ) : (
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation showLabels value={page} onChange={handleChange}>
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              <BottomNavigationAction label="Projects" icon={<CodeIcon />} />
              <BottomNavigationAction label="Events" icon={<EventIcon />} />
            </BottomNavigation>
          </Paper>
        )
      }
    </>
  );
};
export default Navbar;
