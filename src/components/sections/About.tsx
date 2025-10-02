export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a Computer Science and Mathematics student at Rutgers University with a passion for
              machine learning and its applications in solving complex real-world problems.
              Currently working as a Research Fellow at the Rutgers Artifical Intelligence & Data Science Collaboratory,
              I focus on developing predictive models for neuron deformation and Alzheimer&apos;s disease.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My experience spans from machine learning engineering at General Electric Aerospace,
              where I optimized flight scheduling algorithms, to building transformer architectures
              from scratch in Java. I&apos;m particularly interested in the application of machine learnign to various domains,
              including healthcare and computer vision. I&apos;m always eager to learn and take on new challenges in the field of AI and software engineering.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Education</h3>
                <p className="text-foreground/70">Rutgers University - New Brunswick</p>
                <p className="text-secondary">Bachelor in Computer Science & Mathematics</p>
                <p className="text-secondary">GPA: 3.7/4.0</p>
                <p className="text-secondary">Expected: December 2025</p>
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
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C++', 'Java', 'C', 'MATLAB'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-border text-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'OpenCV', 'Metal'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-border text-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Deep Learning', 'Neural Networks', 'GPU Programming', 'Machine Learning', 'Artificial Intelligence', 'Computer Vision'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
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