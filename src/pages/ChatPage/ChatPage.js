import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_SM } from '../../constants/breakpoint';
import { Wrapper } from '../../constants/mainStyle';
import { FiSmile as EmojiIcon, FiLogOut as LeaveRoomIcon } from 'react-icons/fi';
import { IoSend as SendIcon } from 'react-icons/io5';
import { RiArrowLeftSLine as ArrowLeftIcon } from 'react-icons/ri';
import { AuthContext } from '../../contexts';
import { useParams, useHistory } from 'react-router-dom';
import database from '../../config';
import { getUser, scrollToTop } from '../../utils'
import { enterChatRoom, sendMessage, writeOnlineState, leaveChatRoom } from '../../WebAPI'

const ChatContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  width: 100%;
  max-width: 840px;
  height: calc((100vh - 60px) * 0.8);
  max-height: 800px;
`

const Chat = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 20px;
`

const ChatName = styled.div`
  position: absolute;
  top: -30px;
  left: 30px;
  padding: 0 30px;
  line-height: 30px;
  background-color: #cccccc;
  border-radius: 10px 10px 0 0;
  font-size: 0.9375rem;
`

const Sidebar = styled.aside`
  position: relative;
  padding: 20px;
  width: 180px;
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  display: ${props => props.isSidebarOpen ? "none" : "block"};

  ${MEDIA_QUERY_SM} {
    width: ${props => props.isSidebarOpen ? "0" : "100%"};
  }
`

const CloseSidebarButton = styled.div`
  position: absolute;
  left: 0;
  bottom: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 30px;
  border-radius: 0 50% 50% 0;
  font-size: 1.375rem;
  color: #505050;
  background-color: #cccccc;
  cursor: pointer;
  z-index: 1;

  svg {
    transition: 0.3s;
    transform: ${props => props.isSidebarOpen ? "rotate(0)" : "rotate(180deg)" };
  }
`

const MyselfInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9e9e9;
`

// const OnlineUsers = styled.p`
//   font-size: 0.815rem;
//   color: #aaaaaa;
// `

// const UserList = styled.ul`
//   margin: 20px 0 0 0;
//   padding: 0;
//   list-style: none;
//   font-size: 0.9375rem;
// `

// const User = styled.li`
//   position: relative;
//   padding-left: 13px;

//   &::before {
//     position: absolute;
//     content: "";
//     left: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     background-color: #00b9a3;
//   }

//   & + & {
//     margin-top: 10px;
//   }
// `

const MyselfImages = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  background-color: ${props => props.avatar};
  border-radius: 50%;
`

const LeaveRoomButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 25px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    color: #cccccc;
    transition: 0.3s;

    &:hover {
      color: #505050;
    }
  }
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: ${props => props.isSidebarOpen ? "100%" : "calc(100% - 200px)"};

  ${MEDIA_QUERY_SM} {
    display: ${props => props.isSidebarOpen ? "flex" : "none"};
    width: ${props => props.isSidebarOpen ? "100%" : "0"};
  }
`

const ChatContent = styled.div`
  padding: 0 10px;
  height: calc(100% - 70px);
  overflow: auto;
  overflow-x:hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }
 
  &::-webkit-scrollbar-track {
    background-color: #e9e9e9;
    border-radius: 100px;
  }
 
  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 100px;
  }
`

const UserJoinChat = styled.p`
  margin: 15px auto;
  padding: 5px 15px;
  width: fit-content;
  background-color: #e9e9e9;
  border-radius: 20px;
  font-size: 0.875rem;
`

const SelfMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 15px 0 15px auto;
  max-width: 80%;
`

const SelfMessageContent = styled.p`
  padding: 7px 15px;
  margin-left: 10px;
  max-width: calc(100% - 64px);
  height: fit-content;
  background-color: #00b9a3;
  color: #ffffff;
  border-radius: 10px 0 10px 10px;
  word-wrap: break-word;
  white-space: pre;
`

const MessageContentContainer = styled.div`
    display: flex;
    margin: 7.5px auto 7.5px 0;
    max-width: 80%;

  ${MEDIA_QUERY_SM} {
    width: 100%;
    max-width: 100%;
  }
`

const UserImages = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.background};
`

const UserInfo = styled.div`
  width: calc(100% - 40px);
`

const UserName = styled.p`
  margin-bottom: 5px;
  color: #aaaaaa;
  font-size: 0.8125rem;
`

const UserMessage = styled.div`
  display: flex;
  align-items: flex-end;
`

const MessageContent = styled.p`
  margin-right: 10px;
  padding: 7px 15px;
  max-width: calc(100% - 64px);
  background-color: #fff;
  border-radius: 0 10px 10px 10px;
  word-wrap: break-word;
`

const MessageContentTime = styled.p`
  font-size: 0.75rem;
  color: #aaaaaa;
`

const InputField = styled.form`
  position: relative;
`

const Input = styled.input`
  border: transparent;
  padding: 0 75px 0 55px;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #cccccc;
  }
`

const Emoji = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  
  svg {
    width: 100%;
    color: #cccccc;
  }
`

const SendButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: #00b9a3;
  cursor: pointer;
  transition: 0.3s;

  svg {
    color: #fff;
  }

  &:hover {
    background-color: #00ad98;
  }
`

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState([]);
  const { isUserLogin, currentUser } = useContext(AuthContext);
  const { roomId } = useParams();
  const history = useHistory();
  const userData = JSON.parse(getUser('user'));
  
  const getMessageData = (roomId) => {
    database.ref(`messages/${roomId}`).on('value', (snapshot) => {
      const objectResponse = snapshot.val();
      if (objectResponse) {
        const arrayData = Object.keys(objectResponse).map((_) => objectResponse[_]);
        setMessages(arrayData);
      }
    })
  }

  useEffect(() => {
    if (!isUserLogin) {
      history.push('/');
      return
    }
    scrollToTop();
  }, [history, isUserLogin])

  useEffect(() => {
    getMessageData(roomId);
    writeOnlineState(roomId, userData.username);
    enterChatRoom(roomId, userData.username);

    return () => {
      leaveChatRoom(roomId, userData.username);
    }
  }, [roomId, userData.username])

  useEffect(() => {
    const isResized = document.querySelector('.resized');
    isResized.scrollTo(0, isResized.scrollHeight);
  }, [messages])

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleInputChange = e => {
    setCurrentMessage(e.target.value);
  }

  const handleMessageSubmit = e => {
    e.preventDefault();

    if (!currentMessage.replace(/\s/g, '')) return;

    sendMessage({ 
      roomId, 
      message: currentMessage, 
      username: userData.username,
      avatar: userData.avatar,
      isSystemMessage: false
    })

    setCurrentMessage('');
  }

  const handleLeaveRoom = () => {
    history.push('/mode');
  }

  return (
    <Wrapper>
      <ChatContainer>
        <Chat>
          <ChatName>{ roomId === 'lobby' ? '聊天大廳' : `房間編號 ${roomId}`}</ChatName>
          <Sidebar isSidebarOpen={isSidebarOpen}>
            <MyselfInfo>
              <MyselfImages avatar={userData.avatar} />
              {userData.username}
            </MyselfInfo>
            {/* <OnlineUsers>線上人數 {onlineUserList.length} 人</OnlineUsers>
            <UserList>
              { onlineUserList.map(user => <User>{user.username}</User>)}
            </UserList> */}
            <LeaveRoomButton onClick={handleLeaveRoom}>
              <LeaveRoomIcon />
            </LeaveRoomButton>
          </Sidebar>
          <CloseSidebarButton onClick={handleSidebarOpen} isSidebarOpen={isSidebarOpen}>
            <ArrowLeftIcon />
          </CloseSidebarButton>
          <Content isSidebarOpen={isSidebarOpen}>
            <ChatContent className="resized">
              { messages && messages.map(message => {
                if (message.isSystemMessage && message.isInTheRoom) return (<UserJoinChat key={message.id}>{message.username + ' 加入聊天室'} </UserJoinChat>)
                if (message.isSystemMessage && !message.isInTheRoom) return (<UserJoinChat key={message.id}>{message.username + ' 離開聊天室'} </UserJoinChat>)
                return currentUser.username === message.username && !message.isSystemMessage ? (
                  <SelfMessage key={message.id}>
                    <MessageContentTime>{new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}</MessageContentTime>
                    <SelfMessageContent>{message.message}</SelfMessageContent>
                  </SelfMessage>
                ):(
                  <MessageContentContainer key={message.id}>
                      <UserImages background={message.avatar} />
                      <UserInfo>
                        <UserName>{message.username}</UserName>
                        <UserMessage>
                          <MessageContent>{message.message}</MessageContent>
                          <MessageContentTime>{new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}</MessageContentTime>
                        </UserMessage>
                      </UserInfo>
                 </MessageContentContainer>
                )
              })}
            </ChatContent>
            <InputField onSubmit={handleMessageSubmit}>
              <Emoji>
                <EmojiIcon />
              </Emoji>
              <Input placeholder="輸入想說的話" value={currentMessage} onChange={handleInputChange} />
              <SendButton type="submit">
                <SendIcon />
              </SendButton>
            </InputField>
          </Content>
        </Chat>
      </ChatContainer>
    </Wrapper>
  );
}