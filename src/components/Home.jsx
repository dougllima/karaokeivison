import React, { Component } from "react";
import {
  TextField,
  Paper,
  Grid,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import youtube from "./../service/youtubeService";
import VideoDetail from "./VideoDetail";
import VideoItem from "./VideoItem";

const styles = theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  }
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: "",
      items: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  search = async () => {
    await youtube
      .search({
        q: this.state.q
      })
      .then(e => {
        if (e.data && e.data.items) {
          let items = e.data.items;
          console.log(items);
          this.setState({ items });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  renderSelectedVideo = () => {
    const { selectedVideo } = this.state;
    return (
      selectedVideo && (
        <VideoDetail
          handleVideoSelect={this.handleVideoSelect}
          video={selectedVideo}
        />
      )
    );
  };

  renderVideoList = () => {
    const { items } = this.state;
    return (
      <Grid container spacing={2}>
        {items.map(e => (
          <Grid key={e.tag} item xs={12}>
            <VideoItem video={e} handleVideoSelect={this.handleVideoSelect} />
          </Grid>
        ))}
      </Grid>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="q"
                  name="q"
                  label="Video"
                  variant="outlined"
                  placeholder="Nome do video"
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="pesquisar video"
                          onClick={this.search}
                          onMouseDown={this.search}
                        >
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  fullWidth
                />
              </Grid>
              {this.state.selectedVideo && (
                <Grid item xs={12}>
                  {this.renderSelectedVideo()}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.renderVideoList()}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Home);
