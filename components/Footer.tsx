import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.up("md")) ? ( //Only shows when the screen is large enough
    <Grid container height="10%" width={"100%"} justifyContent="center" my={3}>
      <Typography textAlign="center" fontStyle={{ opacity: "50%" }}>
        Made with
      </Typography>
      <Typography color="red" fontStyle={{ opacity: "50%" }}>
        ❤
      </Typography>
      <Typography fontStyle={{ opacity: "50%" }}> by GDSC TTU</Typography>
    </Grid>
  ) : (
    <></>
  );
};
export default Footer;
