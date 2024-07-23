'use client'

import { CrossIcon } from 'lucide-react';
import React, { useState } from 'react';
import { FaImage, FaVideo, FaPoll, FaPlus, FaTimes } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';

const CreatePost: React.FC = () => {
  const [options, setOptions] = useState(['Option 1', 'Option 2']);

  const addOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto p-6  min-h-screen flex flex-col bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <span className="text-2xl font-bold text-gray-800">Create Post</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
          Post
        </button>
      </div>

      <input
        type="text"
        placeholder="Headline"
        className="w-full p-3 mb-6 border rounded-3xl focus:border-blue-500 outline-none text-lg"
      />

      <div className="space-y-4 mb-6">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              placeholder={option}
              className="flex-grow p-2 border rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => removeOption(index)}
              className="bg-red-500 text-white p-3 rounded-r-2xl hover:bg-red-600 transition duration-300"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addOption}
        className="flex items-center justify-center w-full p-3 mb-8 text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-50 transition duration-300"
      >
        <FaPlus className="mr-2" /> Add Option
      </button>

      <div className="flex flex-wrap gap-3 mb-8">
        {['Happy', 'Politics', 'Confession', 'Religious', 'Social'].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition duration-300 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-around mt-auto">
        {[FaImage, FaVideo, FaPoll].map((Icon, index) => (
          <button
            key={index}
            className="p-4 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition duration-300"
          >
            <Icon className="text-2xl" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;