import React, { Component } from "react";
import {
  Button,
  TextField,
  Paper,
  Grid,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import youtube from "./../service/youtubeService";

const styles = theme => ({
  searchContainer: {
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

  search = async () => {
    let result = await youtube
      .search({
        q: this.state.q
      })
      .then(e => {
        if (e.data && e.data.items) {
          let items = e.data.items;
          this.setState({ items });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.searchContainer}>
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
            />
            {this.state.items.map(item => {
              return <p key={item.etag}>{item.snippet.title}</p>;
            })}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
