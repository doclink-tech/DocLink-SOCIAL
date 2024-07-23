'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart2, PlusCircle, Bell, User, Search } from 'lucide-react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-col w-64 bg-white h-screen sticky top-0 shadow-lg border-r border-gray-200">
      <div className="p-4 flex items-center space-x-2">
        <Image src="/logo.svg" alt="App Logo" width={32} height={32} />
        <span className="text-xl font-semibold text-gray-800">YourApp</span>
      </div>
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex-1 px-4 py-2">
        <div className="space-y-1">
          <SidebarItem icon={<Home className="w-5 h-5" />} label="Home" href="/" currentPath={pathname} />
          <SidebarItem icon={<BarChart2 className="w-5 h-5" />} label="Stats" href="/leaderboard" currentPath={pathname} />
          <SidebarItem icon={<PlusCircle className="w-5 h-5" />} label="Create" href="/create" currentPath={pathname} />
          <SidebarItem icon={<Bell className="w-5 h-5" />} label="Notifications" href="/notification" currentPath={pathname} />
          <SidebarItem icon={<User className="w-5 h-5" />} label="Profile" href="/profile" currentPath={pathname} />
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <Image src="/avatar.jpg" alt="User Avatar" width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-medium text-sm text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  currentPath: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href, currentPath }) => {
  const isActive = currentPath === href;
  return (
    <Link 
      href={href} 
      className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
        isActive 
          ? 'bg-blue-100 text-blue-600' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      {icon}
      <span className={`font-medium text-sm ${isActive ? 'font-semibold' : ''}`}>{label}</span>
    </Link>
  );
};

export default Sidebar;