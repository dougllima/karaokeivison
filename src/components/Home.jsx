import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import youtube from "./../service/youtubeService";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  search = async () => {
    let result = await youtube
      .search({
        ...this.state
      })
      .then(e => {
        if (e.data && e.data.items) {
          let items = e.data.items;
          console.log(items);
        }
      })
      .catch(e => {
        console.log(e);
      });
    console.log(result);
  };

  render() {
    return (
      <div>
        <TextField onChange={this.handleChange} name="q" id="q" />
        <Button onClick={this.search} variant="contained">
          Buscar
        </Button>
      </div>
    );
  }
}
