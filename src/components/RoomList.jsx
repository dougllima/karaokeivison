import React, { useEffect, useState, useContext } from 'react';

import { Grid, TextField } from '@material-ui/core';

import Room from './Room';

import { listRooms } from './../service/roomService';
import { UserContext } from './contexts/UserContext';

const RoomList = props => {
  const [rooms, setRooms] = useState([]);
  const [nome, setNome] = useState('');

  const { profile } = useContext(UserContext);

  const criarSala = () => {};

  useEffect(() => {
    const unsub = listRooms(result => {
      setRooms(result);
    });

    return unsub;
  });

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={12}>
        <TextField
          value={nome}
          onChange={e => {
            setNome(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {rooms.map(room => (
          <Room key={room.nome} {...room} />
        ))}
      </Grid>
    </Grid>
  );
};

export default RoomList;
