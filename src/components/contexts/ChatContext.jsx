import React, { useState, useEffect, useContext } from 'react';
import PubNub from 'pubnub';

import { RoomContext } from './RoomContext';

const defaultConfig = {
  publishKey: 'pub-c-5ba4f17c-e63f-48ef-a762-78672617aaca',
  subscribeKey: 'sub-c-61929616-e13d-11e9-875e-e6d5a3474134'
};

export const ChatContext = React.createContext({});

export const ChatProvider = props => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);

  const { room } = useContext(RoomContext);

  const sendMessage = message => {
    client.publish({
      channel,
      message
    });
  };

  useEffect(() => {
    setClient(
      new PubNub({
        ...defaultConfig
      })
    );
  }, []);

  useEffect(() => {
    if (room) {
      setChannel(room.nome);
    } else setChannel(null);
  }, [room]);

  useEffect(() => {
    if (client) {
      const listeners = {
        message: function(m) {
          // handle message
          // var channelName = m.channel; // The channel for which the message belongs
          // var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
          // var pubTT = m.timetoken; // Publish timetoken
          // var publisher = m.publisher; //The Publisher

          var msg = m.message; // The Payload

          setMessages(ms => [...ms, msg]);
        }
      };
      client.addListener(listeners);

      return () => {
        client.removeListener(listeners);
      };
    }
  }, [client]);

  useEffect(() => {
    if (room && client) {
      client.subscribe({ channels: [channel] });
      return () => {
        client.unsubscribe({ channels: [room.nome] });
      };
    }
  }, [client, channel, room]);

  return (
    <ChatContext.Provider value={{ client, channel, messages, sendMessage }}>
      {props.children}
    </ChatContext.Provider>
  );
};
