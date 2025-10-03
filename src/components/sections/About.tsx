import { useElementInView } from '../../hooks/useScrollAnimation'

export function About() {
  const isInView = useElementInView('about-section', 0.2)

  return (
    <section id="about" className="py-20 relative">
      <div id="about-section" className="absolute top-0"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a Computer Science and Mathematics student at Rutgers University, passionate about
              advancing machine learning and applying it to solve complex, real-world problems. As a Research Fellow
              at the Rutgers Artificial Intelligence & Data Science Collaboratory, I focus on predictive modeling 
              for neuron deformation and Alzheimer&apos;s disease.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My experience ranges from developing machine learning solutions at General Electric Aerospace,
              where I optimized crew misconnect recovery and flight scheduling algorithms, to building 
              transformer architectures from scratch in Java. I&apos;m particularly interested in bridging theory 
              and application across domains such as healthcare, computer vision, and large-scale optimization. 
              I&apos;m always eager to explore new challenges at the intersection of AI and software engineering.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Education</h3>
                <p className="text-foreground/70">Rutgers University - New Brunswick</p>
                <p className="text-foreground/70">B.S. in Computer Science & Mathematics</p>
                <p className="text-secondary">GPA: 3.7/4.0 | Expected: December 2025</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Leadership</h3>
                <ul className="text-foreground/70 space-y-1">
                  <li>• Rutgers AI & Data Science Collaboratory Ambassador</li>
                  <li>• IEEE ML/AI Division Lead</li>
                  <li>• Rutgers Poker Club Treasurer</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>

              <div className="space-y-6">
                <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                  <h4 className="text-lg font-medium text-foreground mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C++', 'Java', 'C', 'MATLAB'].map((skill, index) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-border text-foreground rounded-full text-sm font-medium hover-3d cursor-hover transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                  <h4 className="text-lg font-medium text-foreground mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'OpenCV', 'Metal'].map((skill, index) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-border text-foreground rounded-full text-sm font-medium hover-3d cursor-hover transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${800 + index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
                  <h4 className="text-lg font-medium text-foreground mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Deep Learning', 'Neural Networks', 'GPU Programming', 'Machine Learning', 'Artificial Intelligence', 'Computer Vision'].map((skill, index) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover-3d cursor-hover transition-all duration-300 animate-pulse-glow ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${1200 + index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}