import React from 'react';
import { Tab } from '../types';

interface ContentAreaProps {
  activeTab: Tab;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hello, I'm Rohan Kolon
            </h1>
            <p className="text-xl mt-4">
              A passionate software developer with a love for creating beautiful and functional web applications.
            </p>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'JavaScript', 'HTML/CSS', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#37373D] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-8">
            <div className="bg-[#2D2D2D] p-6 rounded-lg border border-[#37373D]">
              <h3 className="text-xl font-semibold text-blue-400">Software Engineer</h3>
              <p className="text-gray-400">Freelance • 2023 - Present</p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                <li>Developed full-stack web applications using React, Node.js, and AWS</li>
                <li>Implemented responsive designs and modern UI/UX practices</li>
                <li>Collaborated with clients to deliver high-quality solutions</li>
              </ul>
            </div>

            <div className="bg-[#2D2D2D] p-6 rounded-lg border border-[#37373D]">
              <h3 className="text-xl font-semibold text-blue-400">Software Development Intern</h3>
              <p className="text-gray-400">Various Companies • 2022 - 2023</p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                <li>Gained hands-on experience with modern web technologies</li>
                <li>Contributed to team projects and learned industry best practices</li>
                <li>Developed strong problem-solving and debugging skills</li>
              </ul>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2D2D2D] p-6 rounded-lg border border-[#37373D] hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-semibold text-blue-400">Portfolio Website</h3>
              <p className="mt-2 text-gray-300">
                Modern portfolio website built with React, TypeScript, and Tailwind CSS. Features a unique IDE-inspired design.
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com/rakdcolon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>

            <div className="bg-[#2D2D2D] p-6 rounded-lg border border-[#37373D] hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-semibold text-blue-400">More Coming Soon</h3>
              <p className="mt-2 text-gray-300">
                Currently working on exciting new projects. Check back soon for updates!
              </p>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="bg-[#2D2D2D] p-6 rounded-lg border border-[#37373D]">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#1E1E1E] rounded-md border border-[#37373D] focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-[#1E1E1E] rounded-md border border-[#37373D] focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-[#1E1E1E] rounded-md border border-[#37373D] focus:border-blue-400 focus:outline-none"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-[#1E1E1E] p-8 overflow-auto">
      {renderContent()}
    </div>
  );
}

export default ContentArea;