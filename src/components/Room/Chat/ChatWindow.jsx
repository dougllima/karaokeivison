import React, { useContext, useState, useCallback } from 'react';

import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardHeader
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ChatMessage from './ChatMessage';

import SendIcon from '@material-ui/icons/Send';

import { ChatContext } from './../../Contexts/ChatContext';
import { UserContext } from './../../Contexts/UserContext';

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    boxSizing: 'border-box'
  },
  pos: {
    marginBottom: 12
  }
}));

const ChatWindow = props => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const { profile } = useContext(UserContext);
  const { messages, sendMessage } = useContext(ChatContext);

  const send = () => {
    if (message) {
      const msg = {
        user: profile.displayName,
        message
      };
      sendMessage(msg);
      setMessage('');
    }
  };

  const renderMessages = useCallback(() => {
    return messages.slice(messages.length - 15, messages.length).map((e, i) => {
      const userIsSender = e.user === profile.displayName;
      let gridProps = {};
      if (userIsSender)
        gridProps = { alignItems: 'flex-start', justify: 'flex-end' };
      return (
        <Grid
          item
          container
          xs={12}
          {...gridProps}
          key={`message-${e.user}-${e.message}-${i}`}
        >
          <ChatMessage
            sender={e.user}
            message={e.message}
            color={userIsSender ? 'primary' : ''}
          />
        </Grid>
      );
    });
  }, [messages, profile]);

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardHeader title={props.title} />
        <CardContent>
          <Grid container direction="row-reverse">
            {renderMessages()}
          </Grid>
        </CardContent>
        <CardActions>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            onKeyPress={e => {
              if (e.charCode === 13) send();
            }}
            value={message}
            onChange={e => setMessage(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" aria-label="send" onClick={send}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ChatWindow;
