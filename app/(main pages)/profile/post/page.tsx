import React from "react";
import PostCard from "@/components/PostCard";
import { Settings } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const PstPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <div className="max-w-4xl bg-white mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8 text-center flex flex-row items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
              Profile
            </h1>
            <div className="flex">
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <Settings className="text-gray-600 w-6 h-6" />
              </button>
            </div>
          </div>

          <nav className="flex justify-between mb-10 border-b">
            <button className="font-semibold text-gray-600 hover:text-gray-800 transition-colors py-2 px-4">
              POST
            </button>
            <button className="font-semibold text-gray-600 hover:text-gray-800 transition-colors py-2 px-4">
              COMMENT
            </button>
            <button className="font-semibold text-blue-500 border-b-2 border-blue-500 py-2 px-4">
              ABOUT
            </button>
          </nav>

          <div className="gap-y-6 flex flex-col">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PstPage;
