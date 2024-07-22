import { Settings } from 'lucide-react';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="mb-8 text-center flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Profile</h1>
        <div className='flex'>
            <Settings className='text-primary' />
        </div>
      </div>

      <nav className="flex justify-between mb-10">
        <button className="font-semibold text-gray-600 hover:text-gray-800 transition-colors">POST</button>
        <button className="font-semibold text-gray-600 hover:text-gray-800 transition-colors">COMMENT</button>
        <button className="font-semibold text-blue-500 border-b-2 border-blue-500 pb-1">ABOUT</button>
      </nav>

      <div className="space-y-6 mb-12">
        {[
          { title: 'Post Karma', value: 2145, icon: '📝' },
          { title: 'Comment Karma', value: 85, icon: '💬' },
          { title: 'Awarder Karma', value: 245, icon: '🏅' },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md py-4 px-6 flex justify-between items-center transform hover:scale-105 transition-transform">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium text-gray-700">{item.title}</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="mb-12 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
        <p className="text-gray-700 mb-4">
          Passionate full-stack developer with a knack for turning caffeine into code. When I&apos;m not debugging, you&apos;ll find me exploring new tech frontiers or perfecting my pizza recipe. 🍕
        </p>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'Node.js', 'Python', 'AWS'].map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Trophies</h2>
      <div className="space-y-6 mb-20">
        {[
          { name: 'Code Ninja', description: 'Contributed to 100+ open-source projects' },
          { name: 'Bug Squasher', description: 'Fixed 500 critical bugs in record time' },
          { name: 'Community Guru', description: 'Helped 1000+ developers in forums' },
          { name: 'Innovation Master', description: 'Created 5 trending dev tools' },
        ].map((trophy, index) => (
          <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow ">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <div>
              <span className="font-medium text-gray-800">{trophy.name}</span>
              <p className="text-sm text-gray-500 mt-1">{trophy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;