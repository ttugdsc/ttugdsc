import { Typography, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Students from "../assets/images/smiling.jpg";
import Image from "next/image";

const Hero = () => {
  return (
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
  );
};

export default Hero;
