import React from 'react';
import { FaFire, FaComment, FaArrowUp } from 'react-icons/fa';
import { IoHome, IoAdd, IoPerson, IoNotifications } from 'react-icons/io5';

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
  <div className="flex items-start py-4 px-4">
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
    <div className="bg-white min-h-screen flex flex-col">
      <header className="sticky top-0 bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 z-10">
        <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
        <button className="text-blue-500 text-sm font-medium">
          Mark all Read
        </button>
      </header>

      <main className="flex-grow overflow-y-auto">
        {notifications.map((notification, index) => (
          <React.Fragment key={notification.id}>
            <NotificationItem {...notification} />
            {index < notifications.length - 1 && <div className="border-b border-gray-100 mx-4" />}
          </React.Fragment>
        ))}
      </main>

      <footer className="sticky bottom-0 bg-white border-t border-gray-100 px-8 py-3">
        <div className="flex justify-between items-center">
          <IoHome className="text-2xl text-gray-400" />
          <IoPerson className="text-2xl text-gray-400" />
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <button className="bg-blue-500 text-white rounded-full p-4 shadow-lg">
                <IoAdd className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="w-6" /> {/* Placeholder for spacing */}
          <IoNotifications className="text-2xl text-blue-500" />
        </div>
      </footer>
    </div>
  );
};

export default NotificationsView;