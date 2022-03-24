import { Grid, Typography, CardMedia, Card, CardContent } from "@mui/material";
import Link from "next/link";

export interface Props {
  //Defining types
  title: string;
  name: string;
  link: string;
  linkedIn: string;
  icon?: React.ReactNode;
}
/*
I pass this single TeamMember card the above arguments and assign their expected types
Then I fill in everything else
*/
const TeamMember = (props: Props) => {
  return (
    <Grid item m={3}>
      <Card
        elevation={3}
        sx={{
          ":hover": {
            //More shadow on hover
            boxShadow: 9,
          },
        }}
      >
        <Link href={props.linkedIn} passHref>
          <CardMedia
            component="img"
            height="140"
            alt={props.name}
            image={props.link}
          />
        </Link>
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
