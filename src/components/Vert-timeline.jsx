import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    justifyContent: "flex-start",
    padding: theme.spacing(3),
    margin: "65px 0px",
  },
  image: {
    width: '100%',
    height: 'auto',
  },
}));

const VertTimeline = (props) => {
  const { yearData } = props;
  const classes = useStyles()
  // console.log(yearData);

  return (
    <main className={classes.content}>
      <Typography variant="h3" component="h1">
        {yearData.year}
      </Typography>
        
        {yearData.itemsData.map((item) => (
          <Card className={classes.root} key={item.id}>
            <CardActionArea>
              <CardMedia className={classes.image}
              component={item.media.type}
              alt={item.title}
              image={item.media.source.url}
              title={item.title}
              />
              <CardContent>
                  <Typography 
                  gutterBottom variant="h5" component="h2"
                  >
                    {item.contentTitle}
                    <p>{item.contentText}</p>
                  </Typography>
                  <Typography 
                  variant='body2' 
                  color='textSecondary' 
                  component='p'
                  >
                    {item.contentDetailText}
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
    </main>
  );
};

export default VertTimeline;
