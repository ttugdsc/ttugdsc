import { Typography, Grid } from "@mui/material";
import TeamMember from "../../components/home/TeamMember";
import team from "../../assets/data/team.json";

const Team = () => {
  return (
    //Pass individual officer info into each TeamMember component for rendering
    <Grid container maxHeight="30%" mb={5}>
      <Grid container m={3} justifyContent="space-around">
        <Typography variant="h4">Our Core Team</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        {team.map(({ id, title, name, image, linkedInURL }) => (
          <TeamMember
            key={id}
            title={title}
            name={name}
            link={image}
            linkedIn={linkedInURL}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Team;
