import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_SM } from '../../constants/breakpoint';
import { Wrapper, SubmitButton } from '../../constants/mainStyle';
import { Link } from 'react-router-dom';
import { FaUsers as UsersIcon, FaDoorOpen as DoorIcon } from 'react-icons/fa';
import { BiMessageAdd as MessageAddIcon } from 'react-icons/bi';
import { IoIosClose as CloseIcon } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { addChatRoom } from '../../WebAPI'
import firebase from 'firebase';
import { AuthContext } from '../../contexts';
import { scrollToTop, checkTextFormat } from '../../utils';

const Container = styled.div`
  width: 280px;
`;

const ModeLink = styled(Link)`
  display: block;
  text-decoration: none;
`

const Mode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 30px 0;
  background-color: #fff;
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #00b9a3;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: #00b9a3;
    color: #ffffff;
  }

  svg {
    width: auto;
    height: 40px;
  }
`

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 80px;
  width: 33%;
  min-width: 480px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

  ${MEDIA_QUERY_SM} {
    padding: 40px;
    width: 90%;
    min-width: auto;
  }
`

const ModalCloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #00b9a3;
  color: #00b9a3;
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: #00b9a3;
    color: #ffffff;
  }
`

const ModalTitle = styled.p`
  margin-bottom: 40px;
  background-color: #ffffff;
  color: #00b9a3;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`

const InputContainer = styled.div`
  margin-bottom: 40px;
`

const InputErrorText = styled.span`
  margin-left: 20px;
  color: #d62f39;
`

const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  color: #505050;
  background-color: #f5f5f5;
  transition: 0.3s;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    border: 1px solid #00b9a3;
  }
`

export default function ModePage() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [createRoomId, setCreateRoomId] = useState('')
  const [joinRoomId, setJoinRoomId] = useState('')
  const [errorMessages, setErrorMessages] = useState('');
  const history = useHistory();
  const reference = firebase.database().ref('chats').orderByChild('roomID')
  const { isUserLogin } = useContext(AuthContext)

  useEffect(() => {
    if (!isUserLogin) {
      history.push('/');
      return
    }
  }, [history, isUserLogin])

  scrollToTop();

  const handleJoinModalClick = () => {
    setIsJoinModalOpen(!isJoinModalOpen);
    setErrorMessages('');
  };

  const handleCreateModalClick = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
    setErrorMessages('');
  };

  const handleJoinRoomSubmit = e => {
    e.preventDefault();

    reference.equalTo(joinRoomId).once('value', (snapshot) => {
      if (!joinRoomId) {
        setErrorMessages('尚未輸入房間編號');
        return
      }

      if (!snapshot.val()) {
        setErrorMessages('此房間不存在');
        return
      }
      
      history.push(`/chat/${joinRoomId}`);
    })
  }

  const handleCreateRoomSubmit = e => {
    e.preventDefault();

    reference.equalTo(createRoomId).once('value', (snapshot) => {
      if (!createRoomId) {
        setErrorMessages('尚未輸入房間編號');
        return
      }

      if (snapshot.val()) {
        setErrorMessages('此房間已存在');
        return
      }

      if (!checkTextFormat(createRoomId, 8, setErrorMessages)) return;
      
      addChatRoom(createRoomId)
      history.push(`/chat/${createRoomId}`);
    })
  }
  
  const handleCreateRoomIDChange = e => {
    setCreateRoomId(e.target.value);
  }
  
  const handleJoinRoomIDChange = e => {
    setJoinRoomId(e.target.value);
  }

  return (
    <Wrapper>
      <Container>
        <ModeLink to="/chat/lobby">
          <Mode>
            <UsersIcon />
            聊天大廳
          </Mode>
        </ModeLink>
        <Mode onClick={handleJoinModalClick}>
          <DoorIcon />
          加入房間
        </Mode>
        { isJoinModalOpen && (
          <>
            <ModalBackground onClick={handleJoinModalClick} />
            <ModalContent>
              <ModalCloseButton onClick={handleJoinModalClick}><CloseIcon /></ModalCloseButton>
              <ModalTitle>加入房間</ModalTitle>
              <form onSubmit={handleJoinRoomSubmit}>
                <InputContainer>
                  <label htmlFor="room-id">
                    房間編號
                    {errorMessages && <InputErrorText>{errorMessages}</InputErrorText>}
                  </label>
                  <Input id="room-id" placeholder="請輸入房間編號" onChange={handleJoinRoomIDChange} />
                </InputContainer>
                <SubmitButton type="submit" value="加入" />
              </form>
            </ModalContent>
          </>
        )}
        <Mode onClick={handleCreateModalClick}>
          <MessageAddIcon />
          創建房間
        </Mode>
        { isCreateModalOpen && (
          <>
            <ModalBackground onClick={handleCreateModalClick} />
            <ModalContent>
              <ModalCloseButton onClick={handleCreateModalClick}><CloseIcon /></ModalCloseButton>
              <ModalTitle>創建房間</ModalTitle>
              <form onSubmit={handleCreateRoomSubmit}>
                <InputContainer>
                  <label htmlFor="room-id">
                    房間編號
                    {errorMessages && <InputErrorText>{errorMessages}</InputErrorText>}
                  </label>
                  <Input id="room-id" placeholder="請輸入房間編號" onChange={handleCreateRoomIDChange} />
                </InputContainer>
                <SubmitButton type="submit" value="建立" />
              </form>
            </ModalContent>
          </>
        )}
      </Container>
    </Wrapper>
  );
}