import React, { useState, useCallback } from 'react';
import {
  TextField,
  Paper,
  Grid,
  InputAdornment,
  IconButton
} from '@material-ui/core';

import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail';

import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import youtube from './../../service/youtubeService';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  }
}));

const VideoPage = props => {
  const [q, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const classes = useStyles();

  const handleKeyPress = event => {
    if (event.key !== 'Enter') return;
    this.search();
  };

  const search = useCallback(async () => {
    await youtube
      .search({
        q
      })
      .then(e => {
        if (e.data && e.data.items) {
          let items = e.data.items;
          setItems({ items });
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, [q]);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Video"
                variant="outlined"
                placeholder="Nome do video"
                onChange={e => setQuery(e.target.value)}
                onKeyPress={e => handleKeyPress(e)}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="pesquisar video"
                        onClick={search}
                        onMouseDown={search}
                      >
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                fullWidth
              />
            </Grid>
            {selectedVideo && (
              <Grid item xs={12}>
                <VideoDetail
                  handleVideoSelect={setSelectedVideo}
                  video={selectedVideo}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={2}>
            {items.map(e => (
              <Grid key={e.tag} item xs={12}>
                <VideoItem video={e} handleVideoSelect={setSelectedVideo} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VideoPage;
