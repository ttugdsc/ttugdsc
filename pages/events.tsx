import Navbar from "../components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { MyLocationOutlined } from "@mui/icons-material";
import events from "../assets/events.json";
import EventCard from "../components/events/Event";
import { useEffect } from "react";

type Event = {
  title: string;
  body: string;
  date: Date;
  venue: string;
};

var eventList = [
  // Later we'll prolly pull these from a database, for now they're hardcoded
  ...events,
];

const Events: NextPage = () => {
  useEffect(() => {
    let newList = [...eventList];
    newList.forEach((current) => {
      current = {
        title: current.title,
        body: current.body,
        date: new Date(current.date).toLocaleString("cst"),
        venue: current.venue,
      };
    });
  }, []);

  return (
    <>
      <Head>
        <title>Events - TTU GDSC</title>
        <meta content="Event page of the Texas Tech Google Developer Student Club" />
      </Head>
      <Navbar />
      <Grid
        container
        component={Paper}
        elevation={1}
        sx={{ width: "98%", mx: "auto" }}
      >
        <Grid item xs={5} sx={{ py: 3 }}>
          <Stack direction="column" spacing={4} sx={{ px: 3, mx: "auto" }}>
            <Typography variant="h5">Featured</Typography>
            <Typography variant="h4">{eventList[0].title}</Typography>
            <Typography variant="body1">{eventList[0].body}</Typography>
            <Button variant="contained">Learn More</Button>
          </Stack>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={4} sx={{ height: "75%", my: "auto" }}>
          <Stack sx={{ pr: 5 }} direction="column" spacing={5}>
            <Stack
              sx={{ border: "gray" }}
              aria-label="date-of-event"
              spacing={5}
              direction="row"
            >
              <CalendarTodayIcon sx={{ mr: 1 }} />
              <Typography variant="body1">{eventList[0].date}</Typography>
            </Stack>
            <Stack
              sx={{ border: "gray" }}
              aria-label="location-of-event"
              spacing={5}
              direction="row"
            >
              <MyLocationOutlined sx={{ mr: 1 }} />
              <Typography variant="body1">{eventList[0].venue}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 3, px: 3, justifyContent: "stretch" }}>
        {eventList.slice(1).map((current) => (
          <Grid
            item
            key={current.title}
            xs={4}
            sx={{ width: "90%" }}
          >
            <EventCard
              title={current.title}
              body={current.body}
              date={current.date}
              venue={current.venue}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Events;
