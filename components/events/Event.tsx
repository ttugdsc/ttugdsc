import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

type Event = {
  title: string;
  body: string;
  date: string;
  venue: string;
};

const EventCard = (props: Event) => {
  //Convert the date string into a usable date
  const useableDate = new Date(props.date);
  return (
    <Grid container sx={{ mt: 3, px: 3 }}>
      <Card>
        <CardHeader
          title={props.title}
          subheader={
            useableDate.toLocaleDateString() +
            " - " +
            useableDate.toLocaleTimeString()
          }
        />
        <CardContent>
          <Typography
            variant="body1"
            sx={{ overflowX: "hidden", overflowY: "auto" }}
          >
            {props.body}
          </Typography>
          <Typography variant="overline">{props.venue}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventCard;
