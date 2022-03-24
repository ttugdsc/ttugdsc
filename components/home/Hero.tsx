import Students from "../../assets/images/smiling.jpg";
import { Typography, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Hero = () => {
  //Prolly a redundant Stack/Grid or 2 here
  //Similar to the Socials section
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      justifyContent="space-around"
    >
      <Grid container>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Grid
            container
            sx={{
              p: 8,
              justifyContent: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                textAlign: {
                  xs: "center",
                  md: "start",
                },
              }}
            >
              Google Developer Student Club
            </Typography>
            <Typography variant="h5" gutterBottom>
              Texas Tech University
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 7, width: "80%" }}
              href="https://linktr.ee/ttudsc"
              target="_blank"
            >
              Become a Member
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Image src={Students} alt="Happy coding students" />
          </Grid>
        </Stack>
      </Grid>
    </Stack>
  );
};
export default Hero;
