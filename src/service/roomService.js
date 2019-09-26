import { firestore } from '../lib/firebase';

// Buscar salas
export const listRooms = callback => {
  return firestore.collection(`salas`).onSnapshot(
    snapshot => {
      const aux = [];

      snapshot.forEach(e => {
        aux.push(e.data());
      });

      callback(aux);
    },
    function(error) {
      console.log('eroooo', error);
    }
  );
};

// Busca Sala
export const getRoom = id => {
  return firestore
    .collection(`salas`)
    .doc(id)
    .get()
    .then(snapshot => {
      if (snapshot.exists) return snapshot.data();
    })
    .catch(error => {
      console.log(error);
    });
};

// Cria sala
export const setRoom = room => {
  return firestore
    .collection(`salas`)
    .doc(room.id)
    .set(room, { merge: true })
    .then(() => {
      console.log('setRoom Ok!');
    })
    .catch(error => {
      console.log('Errou feio, errou rude', error);
    });
};
