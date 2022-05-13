import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/system";

type Event = {
  title: string;
  body: string;
  date: string;
  venue: string;
};

const EventCard = (props: Event) => {
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
          <Typography variant="subtitle1">{props.venue}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventCard;
