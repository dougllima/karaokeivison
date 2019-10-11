import React, { useState, useEffect } from 'react';

export const RoomContext = React.createContext({});

export const RoomProvider = props => {
  // selected room
  const [room, setRoom] = useState(null);

  // Message history
  const [messages, setMessages] = useState([]);

  return (
    <RoomContext.Provider value={{ room, setRoom, messages }}>
      {props.children}
    </RoomContext.Provider>
  );
};
