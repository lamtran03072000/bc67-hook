import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleAddMessage,
  handleChangeMessageAction,
} from '../../redux/chats/chatSlice';

// xây giao diện

const ChatRedux = () => {
  const { listChats } = useSelector((state) => state.chatReducer);

  const dispatch = useDispatch();

  const renderChat = () => {
    return listChats.map((c) => {
      return <p className="bg-light p-3 rounded-2">{c}</p>;
    });
  };

  return (
    <div className="container">
      <div className="card w-25">
        <div className="card-header">Chat</div>
        <div className="card-body">{renderChat()}</div>
        <div className="card-footer">
          <input
            onChange={(e) => {
              let valueInput = e.target.value;
              console.log('valueInput: ', valueInput);
              //   xin chào
              dispatch(handleChangeMessageAction(valueInput));
            }}
            type="text"
            className="rounded-3 p-1 border-1"
          />
          <button
            onClick={() => {
              dispatch(handleAddMessage());
            }}
            className="btn btn-success ms-2"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRedux;
