import React from 'react';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';

interface Message {
  id: string;
  color: string;
  initial: string;
  preview: string;
  lastMessage: string;
  time: string;
}

const MessageItem: React.FC<Message> = ({ color, initial, preview, lastMessage, time }) => (
  <div className="flex items-center py-4 border-b border-gray-100 last:border-b-0">
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mr-4 flex-shrink-0`}>
      <span className="text-white font-bold text-lg">{initial}</span>
    </div>
    <div className="flex-grow min-w-0">
      <p className="text-sm font-semibold text-gray-800 truncate mb-1">
        {preview}
      </p>
      <p className="text-xs text-gray-500 truncate">
        {lastMessage}
      </p>
    </div>
    <div className="text-xs text-gray-400 ml-4 flex-shrink-0">{time}</div>
  </div>
);

const MessagesView: React.FC = () => {
  const messages: Message[] = [
    { id: '1', color: 'bg-blue-500', initial: 'T', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '2', color: 'bg-pink-500', initial: 'A', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '3', color: 'bg-green-500', initial: 'J', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '4', color: 'bg-purple-500', initial: 'M', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '5', color: 'bg-blue-400', initial: 'R', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '6', color: 'bg-orange-400', initial: 'S', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '7', color: 'bg-teal-500', initial: 'D', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '8', color: 'bg-yellow-500', initial: 'L', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-50 flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center">
          <button className="p-2 -ml-2" aria-label="Go back">
            <IoChevronBackOutline className="text-blue-500 text-xl" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 ml-2">Messages</h1>
        </div>
        <button className="p-2 -mr-2" aria-label="Settings">
          <IoSettingsOutline className="text-blue-500 text-xl" />
        </button>
      </header>

      {/* Message List */}
      <main className="flex-grow overflow-y-auto">
        <div className="px-4">
          {messages.map((msg) => (
            <MessageItem key={msg.id} {...msg} />
          ))}
        </div>
      </main>

      {/* Bottom Spacer (for iOS-style bottom bar) */}
      <div className="h-16 bg-gray-50 border-t border-gray-200"></div>
    </div>
  );
};

export default MessagesView;