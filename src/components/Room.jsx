import React, { useContext, useState } from 'react';
import { RoomContext } from './contexts/RoomContext';

const Room = room => {
  const [count, setCount] = useState(0);

  const { setRoom, messages, setMessage, sendMessage } = useContext(
    RoomContext
  );

  return (
    <div>
      {room.nome}
      <br />
      {messages.map((e, i) => {
        return (
          <p key={i}>
            {e.user}: {e.text}
          </p>
        );
      })}
      <button
        onClick={() => {
          console.log('setRoom', room);
          setRoom(room);
        }}
      >
        Seleciona Sala
      </button>
      <button
        onClick={() => {
          sendMessage(count);
          setCount(count + 1);
        }}
      >
        Msg {count}
      </button>
    </div>
  );
};

export default Room;
