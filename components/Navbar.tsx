import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [page, setPage] = useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    event.preventDefault();
    setPage(newPage);
    if (newPage === 0) router.push("/");
    if (newPage === 1) router.push("/projects");
    if (newPage === 2) router.push("/events");
  };

  useEffect(() => {
    if (router.pathname == "/") setPage(0);
    if (router.pathname == "/projects") setPage(1);
    if (router.pathname == "/events") setPage(2);
  }, [router.pathname]);

  const TopTab = styled(Tabs)({
    boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.05)",
  });

  return (
    <Stack
      direction="column"
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      <Container maxWidth="xs">
        <Image src={Logo} alt="Google Developer Student Club logo" />
      </Container>
      <TopTab value={page} onChange={handleChange} centered variant="fullWidth">
        <Tab label="Home" />
        <Tab label="Projects" />
        <Tab label="Events" />
      </TopTab>
    </Stack>
  );
};
export default Navbar;
