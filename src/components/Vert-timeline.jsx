import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    justifyContent: "flex-start",
    padding: theme.spacing(3),
    margin: "65px 0px",
  },
}));

const VertTimeline = (props) => {
  const { yearData } = props;
  const classes = useStyles()
  // console.log(yearData);

  return (
    <main className={classes.content}>
      <Typography variant="h6" component="h1">
        {yearData.year}
      </Typography>
      <Timeline align="left">
        
        {yearData.itemsData.map((item) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent key={item.contentTitle}>
              <Paper elevation={5} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {item.contentTitle}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </main>
  );
};

export default VertTimeline;
