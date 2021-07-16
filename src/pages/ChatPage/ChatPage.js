import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SM } from "../../constants/breakpoint";
import { Wrapper } from "../../constants/mainStyle";
import { FiSmile as EmojiIcon } from 'react-icons/fi';
import { IoCloseCircle as ChatCloseIcon, IoSend as SendIcon } from "react-icons/io5";
import { RiArrowLeftSLine as ArrowLeftIcon } from "react-icons/ri";

const ChatContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  width: 100%;
  max-width: 840px;
  height: 650px;
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
  top: -40px;
  left: 20px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 70px;
  line-height: 40px;
  background-color: #cccccc;
  border-radius: 10px 10px 0 0;
  font-size: 0.9375rem;
  
  svg {
    margin-left: 50px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #d62f39;
    }
  }
`

const Sidebar = styled.aside`
  position: relative;
  padding: 20px;
  width: 180px;
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  display: ${props => props.isSidebarOpen ? "block" : "none"};

  ${MEDIA_QUERY_SM} {
    display: ${props => props.isSidebarOpen ? "none" : "block"};
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

const OnlineUsers = styled.p`
  font-size: 0.815rem;
  color: #aaaaaa;
`

const UserList = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.9375rem;
`

const User = styled.li`
  position: relative;
  padding-left: 13px;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00b9a3;
  }

  & + & {
    margin-top: 10px;
  }
`

const MyselfImages = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  background-color: #b59a92;
  border-radius: 50%;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: ${props => props.isSidebarOpen ? "calc(100% - 200px)" : "100%"};

  ${MEDIA_QUERY_SM} {
    display: ${props => props.isSidebarOpen ? "flex" : "none"};
    width: ${props => props.isSidebarOpen ? "100%" : "0"};
  }
`

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  height: calc(100% - 70px);
  overflow: auto;

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
  display: inline-block;
  padding: 5px 15px;
  height: fit-content;
  background-color: #e9e9e9;
  border-radius: 20px;
  font-size: 0.875rem;
`

const MyselfMessage = styled.p`
  margin: 7.5px 0 7.5px auto;
  padding: 7px 15px;
  max-width: 45%;
  height: fit-content;
  background-color: #00b9a3;
  color: #ffffff;
  border-radius: 10px 0 10px 10px;

  ${MEDIA_QUERY_SM} {
    max-width: 80%;
  }
`

const UserMessageContainer = styled.div`
  display: flex;
  margin: 7.5px auto 7.5px 0;
  max-width: 45%;

  ${MEDIA_QUERY_SM} {
    max-width: 90%;
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

const UserMessage = styled.p`
  padding: 7px 15px;
  background-color: #fff;
  border-radius: 0 10px 10px 10px;
`

const InputField = styled.div`
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

const SendButton = styled.div`
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Wrapper>
      <ChatContainer>
        <Chat>
          <ChatName>
            聊天室名稱
            <ChatCloseIcon />
          </ChatName>
          <Sidebar isSidebarOpen={isSidebarOpen}>
            <MyselfInfo>
              <MyselfImages />
              Mily
            </MyselfInfo>
            <OnlineUsers>線上人數 0 人</OnlineUsers>
            <UserList>
              <User>用戶一號</User>
              <User>用戶二號</User>
              <User>用戶三號</User>
            </UserList>
          </Sidebar>
          <CloseSidebarButton onClick={handleSidebarOpen} isSidebarOpen={isSidebarOpen}>
            <ArrowLeftIcon />
          </CloseSidebarButton>
          <Content isSidebarOpen={isSidebarOpen}>
            <ChatContent>
              <UserJoinChat>Mily 加入聊天室</UserJoinChat>
              <MyselfMessage>哈囉！你們好</MyselfMessage>
              <UserMessageContainer>
                <UserImages background="#77bce2" />
                <UserInfo>
                  <UserName>用戶一號</UserName>
                  <UserMessage>嗨</UserMessage>
                </UserInfo>
              </UserMessageContainer>
              <UserMessageContainer>
                <UserImages background="#93a5d2" />
                <UserInfo>
                  <UserName>用戶二號</UserName>
                  <UserMessage>歡迎歡迎</UserMessage>
                </UserInfo>
              </UserMessageContainer>
            </ChatContent>
            <InputField>
              <Emoji>
                <EmojiIcon />
              </Emoji>
              <Input placeholder="輸入想說的話" />
              <SendButton>
                <SendIcon />
              </SendButton>
            </InputField>
          </Content>
        </Chat>
      </ChatContainer>
    </Wrapper>
  );
}