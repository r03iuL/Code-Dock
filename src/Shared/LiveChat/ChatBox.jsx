import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import useAuth from '../../Hooks/useAuth/useAuth';
// import 'emoji-mart/css/emoji-mart.css';

const ChatBox = () => {
  const { user } = useAuth();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString();
      const message = {
        text: newMessage,
        sender: 'user',
        timestamp: currentTime,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleAddEmoji = (emoji) => {
    setNewMessage(newMessage + emoji.native);
  };

  return (
    <div className='items-start pt-5'>
      <div className="bg-white max-w-4xl mx-10 border border-purple-600 rounded-md p-4 mt-4">
        <div className="h-96 overflow-y-scroll border border-purple-600 p-2 text-white">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user'
                ? 'bg-purple-600 self-end md:ml-64 ml-24 p-3'
                : 'bg-purple-400 self-start mr-24 md:mr-64 p-3'
                } p-1 rounded-md my-2`}
              title={message.timestamp} // Display timestamp on hover
              
            >

              <div className='flex'>
                <div>{message.text}</div>
                <div> <img className='rounded-full w-[30px] ml-auto' src={user?.photoURL} /> </div>
              </div>

              


            </div>

          ))}
         
        </div>

        



        <div className="mt-2 flex relative">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border border-purple-600 rounded-md"
            placeholder="Type your message..."
          />
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="bg-purple-600 text-white border border-purple-600 rounded-md p-2 px-4 ml-2"
          >
            😀
          </button>
          {showEmojiPicker && (
            <Picker
              onSelect={handleAddEmoji}
              set="apple"
              emojiSize={20}
              title="Pick an Emoji"
              className="absolute bottom-12 left-0 z-10"
            />
          )}
          <button
            onClick={handleSendMessage}
            className="bg-purple-600 text-white border border-purple-600 rounded-md p-2 px-4 ml-2"
          >
            Send
          </button>
        </div>
      </div>
      <div className="mt-4 ml-10 text-xs text-gray-400">
        {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default ChatBox;
