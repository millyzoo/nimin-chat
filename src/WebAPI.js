import database from './config';

export const addChatRoom = (roomID) => {
  database.ref(`chats/${roomID}`).set({
    roomID
  });
}
  
export const enterChatRoom = (roomId, username, isSystemMessage) => {
  database.ref(`messages/${roomId}`).push({
    id: {  
      '.sv':'timestamp'
    },
    username,
    isSystemMessage,
  });
}
  
export const sendMessage = ({ roomId, message, username, avatar, isSystemMessage }) => {
  database.ref(`messages/${roomId}`).push({
    id: {  
      '.sv':'timestamp'
    },
    message,
    timestamp: {  
      '.sv':'timestamp'
    },
    username,
    avatar,
    isSystemMessage,
  });
}
  
export const writeOnlineState = (roomId, username) => {
  database.ref(`onlineUser/${roomId}`).push({
    username,
  });
}
