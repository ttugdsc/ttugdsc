import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import SocialButton from "../components/SocialButton";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from "@mui/icons-material/Forum";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Socials = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      sx={{ maxHeight: "40%", bgcolor: "primary.light" }}
    >
      <Grid container xs={5} my={2}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Our Goal
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          The purpose of the Google DSC is to teach technologies to students of
          all majors, host study jams, provide Google certifications, tech
          talks, workshops by Google experts. The organization will also be
          actively working on projects to create solutions for real-life
          problems using Google technology using Google&apos;s resources.
          <br />
          The goal is to bridge the gap between theory and application by
          gaining real-life experience, building projects to help the community,
          and making students ready for taking the first step into their
          professional career.
        </Typography>
      </Grid>
      <Grid container xs={4} my={2} direction="column">
        <Typography variant="h6" sx={{ color: "white" }}>
          Follow Us
        </Typography>
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
  );
};
export default Socials;