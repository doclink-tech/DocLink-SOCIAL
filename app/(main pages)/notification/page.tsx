'use client'

import React from 'react';
import { FaFire, FaComment, FaArrowUp } from 'react-icons/fa';
import { IoHome, IoAdd, IoPerson, IoNotifications, IoSearch } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

interface Notification {
  id: string;
  type: 'trending' | 'comment' | 'upvote';
  message: string;
  time: string;
}

const NotificationIcon: React.FC<{ type: Notification['type'] }> = ({ type }) => {
  const iconClass = "text-lg";
  switch (type) {
    case 'trending':
      return <FaFire className={`${iconClass} text-orange-500`} />;
    case 'comment':
      return <FaComment className={`${iconClass} text-blue-500`} />;
    case 'upvote':
      return <FaArrowUp className={`${iconClass} text-green-500`} />;
    default:
      return null;
  }
};

const NotificationItem: React.FC<Notification> = ({ type, message, time }) => (
  <div className="flex items-start py-4 px-4 hover:bg-gray-50 transition-colors duration-200">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
      <NotificationIcon type={type} />
    </div>
    <div className="flex-grow min-w-0">
      <p className="text-sm text-gray-800 leading-snug">{message}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);


const NotificationsView: React.FC = () => {
  const notifications: Notification[] = [
    { id: '1', type: 'trending', message: 'Your Post is Trending in the Hot Section', time: '9:50 AM' },
    { id: '2', type: 'trending', message: 'Your Post is Trending in the Hot Section', time: '9:50 AM' },
    { id: '3', type: 'comment', message: 'Someone commented on your post: Around Happy fall from these tangled...', time: '9:50 AM' },
    { id: '4', type: 'upvote', message: 'Someone Upvote on your post: Around Happy fall from these tangled...', time: '9:50 AM' },
    { id: '5', type: 'comment', message: 'Someone commented on your post: Around Happy fall from these tangled...', time: '9:50 AM' },
    { id: '6', type: 'trending', message: 'Your Post is Trending in the Fun Section', time: '9:50 AM' },
    { id: '7', type: 'upvote', message: 'Someone Upvote on your post: Around Happy fall from these tangled...', time: '9:50 AM' },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <div className="max-w-4xl bg-white mx-auto p-4 sm:p-6 lg:p-8 h-full">
          <div className="mb-8 text-center flex flex-row items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Notifications</h1>
          <div className="flex items-center space-x-4">
            <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors duration-200">
              Mark all Read
            </button>
          </div>
        </div>
        
        <main className="flex-grow overflow-y-auto bg-white max-w-3xl mx-auto w-full">
          {notifications.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <NotificationItem {...notification} />
              {index < notifications.length - 1 && <div className="border-b border-gray-100" />}
            </React.Fragment>
          ))}
        </main>
      </div>
      </div>
    </div>
  );
};

export default NotificationsView;