import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    minWidth: 275
  },
  pos: {
    marginBottom: 12
  }
}));

const RoomItem = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.nome}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.onClick} size="small" color="primary">
          Entrar
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomItem;
