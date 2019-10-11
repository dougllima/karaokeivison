import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  message: {
    margin: theme.spacing(1)
  }
}));

const ChatMessage = ({ onClick, sender, message, color }) => {
  const classes = useStyles();

  return (
    <Chip
      size="small"
      variant="outlined"
      className={classes.message}
      color={color}
      onClick={onClick}
      label={`${sender}: ${message}`}
    />
  );
};

export default ChatMessage;
