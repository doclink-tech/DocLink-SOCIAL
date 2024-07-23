import Sidebar from "@/components/Sidebar";
import { Settings } from "lucide-react";
import { NextPage } from "next";

interface KarmaItem {
  title: string;
  value: number;
  icon: string;
}

interface Trophy {
  name: string;
  description: string;
}

const ProfilePage: NextPage = () => {
  const karmaItems: KarmaItem[] = [
    { title: "Post Karma", value: 2145, icon: "📝" },
    { title: "Comment Karma", value: 85, icon: "💬" },
    { title: "Awarder Karma", value: 245, icon: "🏅" },
  ];

  const skills: string[] = ["JavaScript", "React", "Node.js", "Python", "AWS"];

  const trophies: Trophy[] = [
    {
      name: "Code Ninja",
      description: "Contributed to 100+ open-source projects",
    },
    {
      name: "Bug Squasher",
      description: "Fixed 500 critical bugs in record time",
    },
    {
      name: "Community Guru",
      description: "Helped 1000+ developers in forums",
    },
    { name: "Innovation Master", description: "Created 5 trending dev tools" },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <div className="max-w-4xl bg-white mx-auto p-4 sm:p-6 lg:p-8 h-full">
          <div className="mb-8 text-center flex flex-row items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
              Profile
            </h1>
            <div className="flex">
              <Settings className="text-gray-600 w-6 h-6" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {karmaItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md py-4 px-6 flex justify-between items-center transform hover:scale-105 transition-transform"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium text-gray-700">
                    {item.title}
                  </span>
                </div>
                <span className="font-bold text-gray-900 text-lg">
                  {item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                About Me
              </h2>
              <p className="text-gray-700 mb-4">
                Passionate full-stack developer with a knack for turning
                caffeine into code. When I&apos;m not debugging, you&apos;ll
                find me exploring new tech frontiers or perfecting my pizza
                recipe. 🍕
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Trophies
              </h2>
              <div className="space-y-4">
                {trophies.map((trophy, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl">🏆</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">
                        {trophy.name}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        {trophy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
