'use client'

import { Github, Cpu, Brain, Terminal } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'GPU Mandelbrot Renderer',
      description: 'Built interactive fractal explorer with GPU shaders on Apple Silicon Metal API, supporting real-time zoom/pan at 16K resolution. Optimized GPU memory usage and parallel execution, achieving high frame rates while handling fractals with precision rendering.',
      technologies: ['Swift', 'C', 'Metal', 'GPU Programming', 'Apple Silicon'],
      github: 'https://github.com/rakdcolon/MandelbrotGPU',
      icon: <Cpu className="h-8 w-8" />,
      highlights: [
        '16K resolution real-time rendering',
        'Apple Silicon Metal API optimization',
        'High-performance GPU parallel execution'
      ]
    },
    {
      title: 'JavaLM - Transformer in Pure Java',
      description: 'Designed a 125M-parameter transformer (GPT-2) in pure Java with performance tuning achieving 39.2 perplexity and 120 tokens/s. Implemented the complete transformer architecture including multi-head self-attention, positional embeddings, and feed-forward networks.',
      technologies: ['Java', 'Transformer Architecture', 'NLP', 'Deep Learning', 'Performance Optimization'],
      github: 'https://github.com/rakdcolon/JLLM',
      icon: <Brain className="h-8 w-8" />,
      highlights: [
        '125M parameters pure Java implementation',
        '39.2 perplexity, 120 tokens/s performance',
        'Complete transformer architecture from scratch'
      ]
    },
    {
      title: 'MyOperatingSystem',
      description: 'Developed core operating system components including a custom Malloc Library, Thread Library, and Shell in C/C++. Introduced a page table system and FUSE-based file system for virtual memory and file management.',
      technologies: ['C', 'C++', 'Linux', 'Memory Management', 'Operating Systems', 'FUSE'],
      github: 'https://github.com/rakdcolon/Operating-Systems',
      icon: <Terminal className="h-8 w-8" />,
      highlights: [
        'Custom memory management system',
        'Multi-threading library implementation',
        'FUSE-based file system'
      ]
    },
    {
      title: 'MineOps',
      description: 'Upgraded a Minecraft Server with Docker and Kubernetes containerization, deployment, automation, and resource management. Integrated a Discord bot via Discord API and webhooks, allowing users to manage the server directly from Discord. Automated server updates and backups using Python Scripting and GitHub Actions, ensuring uptime and version control. Managed project collaboration using GitHub Projects, Integration Tests, Pull Requests, and GitHub Actions for CI/CD.',
      technologies: ['Docker', 'Kubernetes', 'Python', 'GitHub Actions', 'Discord API', 'CI/CD'],
      github: 'https://github.com/rakdcolon/Minecraft-Server',
      icon: <Terminal className="h-8 w-8" />,
      highlights: [
        'Docker & Kubernetes containerization',
        'Discord bot integration for server management',
        'Automated updates & backups with GitHub Actions'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in machine learning, systems programming, and GPU computing
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 shadow-elegant hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="p-3 rounded-xl transition-all duration-300"
                    style={{backgroundColor: 'rgba(0, 122, 255, 0.1)', color: '#007aff'}}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-foreground text-white rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground/70">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-border text-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/rakdcolon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-elegant hover:scale-105"
            style={{backgroundColor: '#007aff', color: '#ffffff'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056cc';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#007aff';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <Github className="h-5 w-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}