import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { usePubNub } from 'pubnub-react';

export const RoomContext = React.createContext({});

export const RoomProvider = props => {
  const { profile } = useContext(UserContext);
  const PubNubClient = usePubNub();
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = message => {
    PubNubClient.publish({
      channel: room.nome,
      message: { text: message + '', user: profile.displayName }
    });
  };

  useEffect(() => {
    if (room) {
      PubNubClient.addListener({
        message: messageEvent => {
          console.log(messageEvent);
          setMessages(messages => [...messages, messageEvent.message]);
        }
      });

      PubNubClient.subscribe({ channels: [room.nome] });

      return () => PubNubClient.unsubscribe(room.nome);
    }
  }, [room]);

  return (
    <RoomContext.Provider value={{ room, setRoom, messages, sendMessage }}>
      {props.children}
    </RoomContext.Provider>
  );
};
