import React from 'react';
import { IoChevronBackOutline, IoEllipsisHorizontal } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';

interface Message {
  id: string;
  text: string;
  isSent: boolean;
  time: string;
}

const ChatView: React.FC = () => {
  const messages: Message[] = [
    { id: '1', text: 'Have a great day with my amazing client all the way from NewYork', isSent: false, time: '09:41 AM' },
    { id: '2', text: 'This is so True', isSent: true, time: '09:41 AM' },
    { id: '3', text: 'Thanks for telling', isSent: false, time: '09:41 AM' },
    { id: '4', text: "I've tried the app", isSent: true, time: '09:41 AM' },
    { id: '5', text: "Yeah, it's really good!", isSent: true, time: '09:41 AM' },
  ];

  return (
    <div className="bg-gray-100 h-screen flex flex-col max-w-7xl mx-auto">
      {/* Header */}
      <header className="bg-white flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center">
          <IoChevronBackOutline className="text-blue-500 text-xl mr-2" />
          <span className="text-blue-500">Back</span>
        </div>
        <h1 className="text-lg font-semibold">Chat</h1>
        <IoEllipsisHorizontal className="text-blue-500 text-xl" />
      </header>

      {/* Chat Messages */}
      <main className="flex-grow overflow-y-auto px-4 py-2">
        <div className="text-center text-xs text-gray-500 my-2">09:41 AM</div>
        {messages.map((message) => (
          <div
            key={message.id}
            className={` max-w-[70%] lg:max-w-[30%] rounded-3xl p-2 my-4 ${
              message.isSent
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-white text-black'
            }`}
          >
            {message.text}
          </div>
        ))}
      </main>

      {/* Typing indicator */}
      <div className="px-4 py-2 text-gray-500 text-sm">Typing...</div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 flex items-center">
        <input
          type="text"
          placeholder="Type your message"
          className="flex-grow bg-gray-100 rounded-full px-4 py-2 mr-2 focus:outline-none"
        />
        <button className="bg-blue-500 text-white rounded-full p-2">
          <IoIosSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ChatView;