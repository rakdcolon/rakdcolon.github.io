import React, { useState } from 'react';
import { Code2, User, Briefcase, FolderGit2, Mail, ChevronRight, X } from 'lucide-react';
import Explorer from './components/Explorer';
import TabBar from './components/TabBar';
import ContentArea from './components/ContentArea';
import { Tab } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const [openTabs, setOpenTabs] = useState<Tab[]>(['about']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    if (!openTabs.includes(tab)) {
      setOpenTabs([...openTabs, tab]);
    }
    setIsMobileMenuOpen(false);
  };

  const handleTabClose = (tab: Tab) => {
    const newTabs = openTabs.filter(t => t !== tab);
    setOpenTabs(newTabs);
    if (activeTab === tab) {
      setActiveTab(newTabs[newTabs.length - 1] || 'about');
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-gray-300 flex flex-col">
      {/* Top Bar */}
      <div className="h-12 bg-[#2D2D2D] border-b border-[#1E1E1E] flex items-center px-4 gap-4">
        <Code2 className="w-6 h-6 text-blue-400" />
        <span className="text-sm">Portfolio.dev</span>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col order-1 md:order-2">
          <TabBar 
            openTabs={openTabs}
            activeTab={activeTab}
            onTabClick={handleTabClick}
            onTabClose={handleTabClose}
          />
          <ContentArea activeTab={activeTab} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="fixed bottom-4 right-4 md:hidden z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <ChevronRight />}
        </button>

        {/* File Explorer */}
        <div className={`
          fixed bottom-0 left-0 right-0 md:static md:w-64 bg-[#252526] border-t md:border-t-0 md:border-r border-[#1E1E1E]
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
          md:order-1 z-40
        `}>
          <Explorer activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
      </div>
    </div>
  );
}

export default App;