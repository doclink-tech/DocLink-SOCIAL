// components/RightSidebar.tsx
import React from 'react';
import Image from 'next/image';
import { UserPlus, X } from 'lucide-react';

interface FriendRequest {
  id: string;
  name: string;
  avatarUrl: string;
  mutualFriends: number;
}

const mockFriendRequests: FriendRequest[] = [
  { id: '1', name: 'Alice Johnson', avatarUrl: '/avatars/alice.jpg', mutualFriends: 5 },
  { id: '2', name: 'Bob Smith', avatarUrl: '/avatars/bob.jpg', mutualFriends: 2 },
  { id: '3', name: 'Carol White', avatarUrl: '/avatars/carol.jpg', mutualFriends: 8 },
];

const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden xl:block w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto h-screen sticky top-0">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Friend Requests</h2>
      <div className="space-y-6">
        {mockFriendRequests.map((request) => (
          <FriendRequestCard key={request.id} request={request} />
        ))}
      </div>
    </aside>
  );
};

const FriendRequestCard: React.FC<{ request: FriendRequest }> = ({ request }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center space-x-4 mb-4">
        <Image src={request.avatarUrl} alt={request.name} width={48} height={48} className="rounded-full" />
        <div>
          <h3 className="font-semibold text-gray-800">{request.name}</h3>
          <p className="text-sm text-gray-500">{request.mutualFriends} mutual friends</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-500 text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-blue-600 transition-colors flex items-center justify-center">
          <UserPlus className="w-4 h-4 mr-2" />
          Accept
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 rounded-md py-2 px-4 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
          <X className="w-4 h-4 mr-2" />
          Decline
        </button>
      </div>
    </div>
  );
};

export default RightSidebar