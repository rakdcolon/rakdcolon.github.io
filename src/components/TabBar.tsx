import React from 'react';
import { User, Briefcase, FolderGit2, Mail, X } from 'lucide-react';
import { Tab } from '../types';

interface TabBarProps {
  openTabs: Tab[];
  activeTab: Tab;
  onTabClick: (tab: Tab) => void;
  onTabClose: (tab: Tab) => void;
}

const TabBar: React.FC<TabBarProps> = ({ openTabs, activeTab, onTabClick, onTabClose }) => {
  const getIcon = (tab: Tab) => {
    switch (tab) {
      case 'about': return <User size={16} />;
      case 'experience': return <Briefcase size={16} />;
      case 'projects': return <FolderGit2 size={16} />;
      case 'contact': return <Mail size={16} />;
    }
  };

  const getFileName = (tab: Tab) => {
    switch (tab) {
      case 'about': return 'about.md';
      case 'experience': return 'experience.json';
      case 'projects': return 'projects.tsx';
      case 'contact': return 'contact.ts';
    }
  };

  return (
    <div className="h-9 bg-[#2D2D2D] flex">
      {openTabs.map((tab) => (
        <div
          key={tab}
          className={`flex items-center gap-2 px-3 py-1 text-sm cursor-pointer border-r border-[#1E1E1E] ${
            activeTab === tab
              ? 'bg-[#1E1E1E] text-white'
              : 'bg-[#2D2D2D] text-gray-400 hover:bg-[#37373D]'
          }`}
          onClick={() => onTabClick(tab)}
        >
          {getIcon(tab)}
          <span>{getFileName(tab)}</span>
          <X
            size={14}
            className="ml-2 hover:bg-[#37373D] rounded"
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(tab);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default TabBar;