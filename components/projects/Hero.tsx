import { Grid, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SocialButton from "../home/SocialButton";
import { Box } from "@mui/system";

const Hero = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ mx: "auto", my: 3, pl: 2 }}>
          <iframe
            width="720"
            height="405"
            src="https://www.youtube-nocookie.com/embed/Jqf52nThBt0?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="column" sx={{ mx: 18, mt: 4 }} spacing={4}>
          <Typography align="center" variant="h6">
            Texas Tech Developer Student Club Mission
          </Typography>
          <Typography variant="body1">
            The purpose of the Texas Tech Google Developer Student Club is to
            make technology more accessible and we do that by hosting workshops,
            code-alongs, and speaker events! We also organize open source
            projects for members to participate in.
          </Typography>
          <Typography variant="body1">
            The goal is to bridge the gap between theory and application by
            gaining real-life experience, building projects to help the
            community, and making students ready for taking the first step into
            their professional career.
          </Typography>
        </Stack>
        <Grid
          container
          sx={{
            mt: 4,
            justifyContent: "center",
          }}
        >
          <SocialButton
            link="https://github.com/ttugdsc"
            label="Our Projects"
            icon={<GitHubIcon />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
