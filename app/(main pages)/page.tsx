import React from "react";
import PostCard from "@/components/PostCard";
import PollCard from "@/components/PollCard";
import TopNav from "@/components/TopNav";

const MobileView: React.FC = () => {
  return (
    <div className="bg-gray-100 overflow-y-auto">
      <div className="p-4 space-y-4 mb-20">
        <TopNav />
        {/* Post */}
        <PostCard />
        <PostCard />

        {/* Poll */}
        <PollCard />
      </div>
    </div>
  );
};

export default MobileView;
