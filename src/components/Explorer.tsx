import React from 'react';
import { ChevronRight, User, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { Tab } from '../types';

interface ExplorerProps {
  activeTab: Tab;
  onTabClick: (tab: Tab) => void;
}

const Explorer: React.FC<ExplorerProps> = ({ activeTab, onTabClick }) => {
  const files: { id: Tab; name: string; icon: React.ReactNode }[] = [
    { id: 'about', name: 'about.md', icon: <User size={16} /> },
    { id: 'experience', name: 'experience.json', icon: <Briefcase size={16} /> },
    { id: 'projects', name: 'projects.tsx', icon: <FolderGit2 size={16} /> },
    { id: 'contact', name: 'contact.ts', icon: <Mail size={16} /> },
  ];

  return (
    <div className="w-64 bg-[#252526] border-r border-[#1E1E1E]">
      <div className="p-2 text-sm text-gray-400 uppercase">Explorer</div>
      <div className="px-2">
        <div className="flex items-center gap-1 p-1 text-sm">
          <ChevronRight size={16} />
          <span>Portfolio</span>
        </div>
        {files.map((file) => (
          <div
            key={file.id}
            className={`flex items-center gap-2 p-1 text-sm cursor-pointer hover:bg-[#2D2D2D] rounded ${
              activeTab === file.id ? 'bg-[#37373D]' : ''
            }`}
            onClick={() => onTabClick(file.id)}
          >
            {file.icon}
            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorer;