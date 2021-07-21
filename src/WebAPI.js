import firebase from 'firebase';
import database from './config';

export const addChatRoom = (roomID) => {
  firebase.database().ref('chats/' + roomID).set({
    roomID
  });
}
