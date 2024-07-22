import PostCard from "@/components/PostCard";
import { Settings } from "lucide-react";
import React from "react";

const PstPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 p-6">
      <div className="mb-8 text-center flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Profile</h1>
        <div className="flex">
          <Settings className="text-primary" />
        </div>
      </div>

      <nav className="flex justify-between mb-10">
        <button className="font-semibold text-gray-600 hover:text-gray-800 transition-colors">
          POST
        </button>
        <button className="font-semibold text-gray-600 hover:text-gray-800 transition-colors">
          COMMENT
        </button>
        <button className="font-semibold text-blue-500 border-b-2 border-blue-500 pb-1">
          ABOUT
        </button>
      </nav>
      <div className="gap-y-6 flex flex-col mb-20">

      <PostCard />
      <PostCard />
      <PostCard />
      </div>
    </div>
  );
};

export default PstPage;
