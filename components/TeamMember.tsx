import { Avatar, Grid, Typography, Stack, CardMedia, Card, CardContent } from "@mui/material";
import { Url } from "url";

export interface Props {
  //Defining types
  title: string;
  name: string;
  link: string;
  icon?: React.ReactNode;
}

const TeamMember = (props: Props) => {
  return (
    <Grid item m={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          alt={props.name}
          image={props.link}
        />
        <CardContent>
          <Typography variant="subtitle2" mt={2} justifyContent="center">
            {props.title}
          </Typography>
          <Typography variant="subtitle2" mt={2}>
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamMember;
