import React, { useEffect, useState, useContext } from 'react';

import { Grid } from '@material-ui/core';

import Room from './Room';
import RoomItem from './RoomItem';

import { listRooms } from './../../service/roomService';
import { RoomContext } from './../Contexts/RoomContext';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const { room, setRoom } = useContext(RoomContext);

  useEffect(() => {
    const unsub = listRooms(result => {
      setRooms(result);
    });

    return unsub;
  }, []);

  return (
    <Grid container>
      {room ? (
        <Room {...room} />
      ) : (
        rooms.map(room => (
          <Grid key={room.nome} item xs={12} sm={6} md={4}>
            <RoomItem
              {...room}
              onClick={() => {
                setRoom(room);
              }}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default RoomList;
