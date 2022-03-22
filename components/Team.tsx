import { Avatar, Typography, Grid, Paper, Stack } from "@mui/material";
import TeamMember from "../components/TeamMember";
import Samuel from "../assets/images/samuel.jpeg";
import Shruti from "../assets/images/shruti.jpeg";
import Garret from "../assets/images/garret.png";
import Ahmed from "../assets/images/ahmed.jpg";
import Sahil from "../assets/images/sahil.jpg";

const Team = () => {
  return (
    //Why the fuck won't it center
    <Paper elevation={2}>
      <Grid container maxHeight="30%" mb={5}>
        <Grid container m={3} justifyContent="space-around">
          <Typography variant="h4">Our Core Team</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          md={12}
        >
          <TeamMember
            title="GDSC Lead"
            name="Samuel Adetunji"
            link="https://i.ibb.co/xMwg6D6/samuel.jpg"
          />
          <TeamMember
            title="HackWesTX Lead"
            name="Ahmed Bayoumi"
            link="https://i.ibb.co/GTCjphB/ahmed.jpg"
          />
          <TeamMember
            title="Finance Lead"
            name="Garret Carmouche"
            link="https://i.ibb.co/yQ2C6sv/garret.png"
          />
          <TeamMember
            title="Marketing Lead"
            name="Minoshun Renganathan"
            link="https://media-exp1.licdn.com/dms/image/D4E35AQGJrrqFZ8CWyw/profile-framedphoto-shrink_800_800/0/1628579565830?e=1648004400&v=beta&t=oKmhoOy1L6cSsdeRzKw2I4JGjumVNhVrTUhvs-WnjOw"
          />
          <TeamMember
            title="Event Planning Lead"
            name="Arnob Roy"
            link="https://media-exp1.licdn.com/dms/image/C4D03AQHly8NI2GTw1w/profile-displayphoto-shrink_800_800/0/1636159388835?e=2147483647&v=beta&t=PLkQBXxilHhPCMocnSJ9Uul24a7kVhwkw84lbyn38Z0"
          />
          <TeamMember
            title="Project Lead"
            name="Sahil Shamdasani"
            link="https://i.ibb.co/NCw0XzM/sahil.jpg"
          />
          <TeamMember
            title="Code the Shift - Founder"
            name="Shruti Nagawekar"
            link="https://i.ibb.co/RhWL7yY/shruti.jpg"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Team;
