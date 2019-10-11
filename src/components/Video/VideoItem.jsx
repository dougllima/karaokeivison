import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {},
  media: {
    maxHeight: 140
  }
});

const VideoItem = ({ video, handleVideoSelect }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea onClick={() => handleVideoSelect(video)}>
        <CardMedia
          className={classes.media}
          component="img"
          image={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          alt={video.snippet.description}
        />
        <Typography gutterBottom variant="h6">
          {video.snippet.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {video.snippet.description}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
export default VideoItem;
