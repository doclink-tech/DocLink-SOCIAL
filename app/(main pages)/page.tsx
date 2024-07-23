
import React from "react";
import PostCard from "@/components/PostCard";
import PollCard from "@/components/PollCard";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 ">
          <div className="lg:max-w-5xl max-w-4xl mx-auto p-6 space-y-6">
            <TopNav />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <PostCard />
              <PostCard />
              <PollCard />
            </div>
          </div>
        </div>
        <div className="lg:hidden fixed bottom-0 left-0 right-0">
          <BottomNav />
        </div>
    </div>
  );
};

export default Home;