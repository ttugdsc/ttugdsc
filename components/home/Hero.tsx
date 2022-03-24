import Students from "../../assets/images/smiling.jpg";
import {
  Typography,
  Button,
  useMediaQuery,
  Stack,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Hero = () => {
  return (
    <Grid
      container
      direction={{ xs: "column-reverse", md: "row" }}
      justifyContent="space-around"
      xs={12}
    >
      <Grid container xs={12}>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Grid
            container
            xs={12}
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
    </Grid>
  );
};
export default Hero;
