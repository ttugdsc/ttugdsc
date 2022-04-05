import { Container, Grid, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SocialButton from "../home/SocialButton";
import { Box } from "@mui/system";

const Hero = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box sx={{ width: "720px", mx: "auto", my: 3 }}>
        <iframe
          width="720"
          height="405"
          src="https://www.youtube-nocookie.com/embed/Jqf52nThBt0?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Box>
      <Stack direction="column" sx={{ mx: 18, justifyContent: "center" }}>
        <Typography align="center" variant="h6" sx={{ mt: 8 }}>
          Texas Tech Developer Student Club Mission
        </Typography>
        <Typography align="center" variant="body1" sx={{ mt: 6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </Typography>
        <Grid
          container
          sx={{
            py: 8,
            justifyContent: {
              xs: "center",
              md: "start",
            },
          }}
        >
          <SocialButton
            link="https://github.com/ttugdsc"
            label="Github"
            icon={<GitHubIcon />}
          />
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Hero;
