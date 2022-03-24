import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import SocialButton from "../home/SocialButton";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from "@mui/icons-material/Forum";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Socials = () => {
  return (
    <Paper elevation={2}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        sx={{ maxHeight: "40%", bgcolor: "primary.light" }}
      >
        <Grid item xs={5} my={2}>
          <Grid container mb={3}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Our Goal
            </Typography>
          </Grid>
          <Grid container justifyContent="space-around">
            <Typography variant="body1" sx={{ color: "white" }}>
              The purpose of the Texas Tech Google Developer Student Club is to
              make technology more accessible and we do that by hosting
              workshops, code-alongs, and speaker events! We also organize open
              source projects for members to participate in.
              <br />
              <br />
              The goal is to bridge the gap between theory and application by
              gaining real-life experience, building projects to help the
              community, and making students ready for taking the first step
              into their professional career.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4} my={2}>
          <Grid>
            <Typography variant="h4" sx={{ color: "white" }}>
              Follow Us
            </Typography>
          </Grid>
          <Grid container sx={{ my: 5, ml: 0 }}>
            <SocialButton
              link="https://techconnect.dsa.ttu.edu/organization/dsc"
              label="Tech Connect"
              icon={<SchoolIcon />}
            />
            <SocialButton
              link="https://twitter.com/ttugdsc"
              label="Twitter"
              icon={<TwitterIcon />}
            />
            <SocialButton
              link="https://discord.gg/nTSWsXGNeQ"
              label="Discord"
              icon={<ForumIcon />}
            />
            <SocialButton
              link="https://www.youtube.com/channel/UCMjXs7pB9-E9wmpALv41aWg"
              label="YouTube"
              icon={<YouTubeIcon />}
            />
            <SocialButton
              link="https://github.com/ttugdsc"
              label="Github"
              icon={<GitHubIcon />}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Socials;
