'use client'

import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

export function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'rohan.karamel@gmail.com',
      href: 'mailto:rohan.karamel@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '(469) 986-6910',
      href: 'tel:+14699866910'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Dallas, TX',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com/rakdcolon',
      username: '@rakdcolon'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohankaramel/',
      username: 'rohankaramel'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, collaborations, or just connecting with fellow engineers and researchers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-sm text-secondary">{method.label}</p>
                      {method.href === '#' ? (
                        <p className="text-foreground font-medium">{method.value}</p>
                      ) : (
                        <a
                          href={method.href}
                          className="text-foreground font-medium hover:text-accent transition-colors"
                        >
                          {method.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass-enhanced rounded-xl hover:shadow-elegant transition-all duration-300 group hover-3d "
                  >
                    <div className="p-2 bg-accent/10 rounded-lg text-accent transition-all duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-foreground font-medium">{link.label}</p>
                      <p className="text-secondary text-sm">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-enhanced rounded-2xl p-8 shadow-elegant hover-3d">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Let&apos;s Work Together
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Whether you&apos;re interested in my research work, looking for a machine learning engineer,
              or want to collaborate on an exciting project, I&apos;d love to hear from you. I&apos;m particularly
              interested in opportunities that involve ML/AI research or innovative software engineering challenges.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Currently Available For:</h4>
                <ul className="text-foreground/70 space-y-1">
                  <li>• Full-time opportunities (Post-graduation)</li>
                  <li>• Research collaborations</li>
                </ul>
              </div>

              <a
                href="mailto:rohan.karamel@gmail.com"
                className="block w-full text-center px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-elegant hover-3d "
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
                Send Me an Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-secondary">
            © 2024 Rohan Karamel. Built with Next.js and hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </section>
  )
}