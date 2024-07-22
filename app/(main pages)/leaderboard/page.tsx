import React from 'react';
import { FaChevronLeft, FaPen, FaHome, FaChartBar, FaPlus, FaUser, FaTrophy } from 'react-icons/fa';

interface LeaderboardEntry {
  rank: number;
  name: string;
  karma: number;
  avatar: string;
}

const LeaderboardPage: React.FC = () => {
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: 'Stephen Joseph', karma: 2123, avatar: '🦊' },
    { rank: 2, name: 'Angelina Warden', karma: 2120, avatar: '🐺' },
    { rank: 3, name: 'Conway Mathew', karma: 1982, avatar: '🐼' },
    { rank: 4, name: 'Samreen Ranel', karma: 1543, avatar: '🦄' },
    { rank: 5, name: 'makyismynickname', karma: 1231, avatar: '🐺' },
    { rank: 6, name: 'Samreen Ranel', karma: 1543, avatar: '🦄' },
    { rank: 7, name: 'Samreen Ranel', karma: 1543, avatar: '🦄' },
    { rank: 8, name: 'Samreen Ranel', karma: 1543, avatar: '🦄' },
    { rank: 9, name: 'Samreen Ranel', karma: 1543, avatar: '🦄' },
    { rank: 10, name: 'Samreen Ranel', karma: 1543, avatar: '🦄' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-sm">
      {/* Header */}
      <header className="bg-white p-4 flex items-center">
        <FaChevronLeft className="text-blue-500 text-lg" />
        <h1 className="text-xl font-semibold ml-4">Leaderboard</h1>
      </header>

      {/* User Info */}
      <div className="bg-white mt-4 p-6 mx-4 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full flex items-center justify-center text-4xl shadow-inner">
              🐺
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
              5
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="font-bold text-xl text-gray-800">makyismynickname</h2>
            <button className="mt-2 text-blue-600 flex items-center text-sm hover:text-blue-800 transition-colors duration-200">
              <FaPen className="mr-2" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* User Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 m-4 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <FaTrophy className="text-yellow-300 text-2xl" />
            <div>
              <div className="text-xl font-bold">Rank: 5th</div>
              <div className="text-sm opacity-75">Top 10%</div>
            </div>
          </div>
          <div>
            <div className="text-xl font-bold">1231 pts</div>
            <div className="text-sm opacity-75">Total Karma</div>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-center">
          <div className="text-sm font-bold">+20 points to next rank</div>
          <div className="text-xs">Keep it up!</div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="mt-4 px-4">
        <table className="w-full border-separate border-spacing-y-2">
          <thead className="text-left text-gray-500">
            <tr>
              <th className="font-normal pl-3">Rank</th>
              <th className="font-normal">Name</th>
              <th className="font-normal text-right pr-3">Karma</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index} className={`${
                index === 0 ? 'bg-yellow-400' :
                index === 1 ? 'bg-gray-300' :
                index === 2 ? 'bg-yellow-600' :
                index === 4 ? 'bg-red-500 text-white' : 'bg-white'
              } rounded-xl overflow-hidden`}>
                <td className="py-3 pl-4 rounded-l-xl">{entry.rank}</td>
                <td className="py-3">
                  <div className="flex items-center">
                    <span className="mr-2 text-xl">{entry.avatar}</span>
                    {entry.name}
                  </div>
                </td>
                <td className="py-3 pr-4 text-right rounded-r-xl">{entry.karma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;