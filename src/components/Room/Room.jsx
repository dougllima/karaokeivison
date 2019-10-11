import React, { useContext } from 'react';

import ChatWindow from './Chat/ChatWindow';

import { RoomContext } from './../contexts/RoomContext';

const Room = () => {
  const { room } = useContext(RoomContext);

  return <ChatWindow title={room.nome} />;
};

export default Room;
