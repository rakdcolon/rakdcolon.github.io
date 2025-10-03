'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { TypewriterEffect } from '../ui/TypewriterEffect'
import { Interactive3D } from '../ui/Interactive3D'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground">
            <TypewriterEffect
              text="Rohan Karamel"
              delay={800}
              speed={120}
            />
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-secondary mb-8 font-light">
            Machine Learning Engineer & Researcher
          </p>

          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Research Fellow at Rutgers Artifical Intelligence & Data Science Collaboratory, passionate about deep learning,
            neuroscience modeling, and building intelligent systems that push the boundaries of what&apos;s possible.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/rakdcolon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 shadow-elegant hover-3d animate-pulse-glow"
              style={{backgroundColor: '#1d1d1f', color: '#ffffff'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#007aff';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1d1d1f';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/rohankaramel/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 shadow-elegant hover-3d animate-pulse-glow"
              style={{backgroundColor: '#1d1d1f', color: '#ffffff'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#007aff';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1d1d1f';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:rohan.karamel@gmail.com"
              className="p-3 rounded-full transition-all duration-300 shadow-elegant hover-3d animate-pulse-glow"
              style={{backgroundColor: '#1d1d1f', color: '#ffffff'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#007aff';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1d1d1f';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Interactive3D intensity={12}>
              <a
                href="#about"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-elegant"
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
                Learn More About Me
              </a>
            </Interactive3D>
            <Interactive3D intensity={12}>
              <a
                href="#projects"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background"
              >
                View My Work
              </a>
            </Interactive3D>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-secondary" />
      </div>
    </section>
  )
}