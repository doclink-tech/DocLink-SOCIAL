import React from "react";
import { IoChevronBackOutline, IoShareOutline } from "react-icons/io5";
import { FaUserFriends, FaDownload, FaDollarSign } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ReferralView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="px-4 py-3 flex items-center border-b border-gray-200">
        <IoChevronBackOutline className="text-blue-500 text-xl mr-2 md:hidden" />
        <span className="text-blue-500 text-lg md:hidden">Back</span>
        <h1 className="text-xl font-semibold flex-grow text-center md:text-left">
          Referrals
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6 md:p-8 md:max-w-5xl md:mx-auto">
        <div className="md:flex md:space-x-8">
          {/* Referral Card */}
          <div className="bg-blue-600 rounded-xl p-5 text-white shadow-md md:w-1/2 md:flex md:flex-col md:justify-center">
            <p className="text-sm mb-1">Total Referred: 10</p>
            <h2 className="text-2xl font-bold mb-2">Refer a Friend</h2>
            <p className="text-sm mb-4">Earn $15 on each Referrals</p>
            <div className="bg-white rounded-lg flex items-center p-3">
              <input
                type="text"
                value="www.yourcollegereferral.com"
                className="flex-grow bg-transparent text-gray-700 text-sm focus:outline-none"
                readOnly
              />
              <IoShareOutline className="text-blue-500 text-xl cursor-pointer" />
            </div>
          </div>

          {/* How it Works */}
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">How it Works</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <Step
                    icon={<FaUserFriends className="text-xl" />}
                    title="Invite your Friends"
                    description="Share your link"
                  />
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Step
                    icon={<FaDownload className="text-xl" />}
                    title="They download the app"
                    description="Share funny content"
                  />
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Step
                    icon={<FaDollarSign className="text-xl" />}
                    title="You make $$$"
                    description="5 Referral for $50"
                  />
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
  <div className="flex flex-row items-center">
    <div className="bg-gray-100 rounded-full p-3 mr-4">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

export default ReferralView;