import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Fab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  selectButton: {
    float: "right"
  },
  player: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "200px"
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: "10%",
      height: "315px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "560px",
      height: "315px"
    }
  }
}));
const VideoDetail = ({ video, handleVideoSelect }) => {
  const classes = useStyles();

  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <Fab color="secondary" onClick={() => handleVideoSelect(null)}>
            <CloseIcon />
          </Fab>
          <Fab
            color="secondary"
            onClick={() =>
              window.alert(
                "RÁ, pegadinha do malandro. Essa budega não faz nada ainda."
              )
            }
            className={classes.selectButton}
          >
            <DoneIcon />
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <iframe
            className={classes.player}
            src={videoSrc}
            allowFullScreen={false}
            title="Video player"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{video.snippet.title}</Typography>
          <Typography variant="body1">{video.snippet.description}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VideoDetail;
