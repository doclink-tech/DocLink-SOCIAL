import React from "react";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { RiMessage2Fill } from "react-icons/ri";
import { Ellipsis } from "lucide-react";

const PollCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-sm">15 hours ago</span>
        <div className="flex flex-row items-center gap-x-3">
              <Button
                className="text-white rounded-3xl font-semibold"
                size="sm"
              >
                <RiMessage2Fill className="mr-1" /> Message
              </Button>
              <Ellipsis />
            </div>
      </div>
      <p className="mb-4">
        Have a great day with my amazing client all the way from NewYork
      </p>
      <div className="space-y-2">
        <div className="p-2 flex flex-col gap-3">
          <Label>Fill</Label>
          <Progress value={50} className="w-[60%]" />
        </div>
        <div className="p-2 flex flex-col gap-3">
          <Label>Default</Label>
          <Progress value={50} className="w-[60%]" />
        </div>
        <div className="p-2 flex flex-col gap-3">
          <Label>Very</Label>
          <Progress value={50} className="w-[60%]" />
        </div>
      </div>
    </div>
  );
};

export default PollCard;
