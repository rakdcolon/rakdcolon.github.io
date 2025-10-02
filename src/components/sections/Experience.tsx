import { Calendar, MapPin, Building2 } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: 'Research Fellow',
      company: 'Rutgers AI and Data Science Collaboratory',
      location: 'New Brunswick, NJ',
      period: 'May 2025 - Present',
      description: [
        'Developed predictive models of neuron deformation under injury conditions to better understand traumatic brain injury',
        'Automated large-scale Abaqus simulations in Python to analyze white-matter brain data across thousands of 3D geometries',
        'Trained recurrent neural networks to model behavior from simulation data, enabling characterization of cellular material properties',
        'Co-authoring a paper titled "A Machine Learning-based Modeling of Fractional Viscoelasticity in Brain White Matter" (in preparation)'
      ],
      skills: ['Python', 'MATLAB', 'Abaqus', 'RNNs', 'Deep Learning', 'Scientific Computing']
    },
    {
      title: 'Machine Learning Engineer Intern',
      company: 'General Electric Aerospace',
      location: 'Austin, TX',
      period: 'May 2024 - August 2024',
      description: [
        'Created datasets with classifications of 3,000,000+ historical flight scheduling problems for major airlines using Java and Azure',
        'Cut average solve time by over 50% and reduced solver costs by $4,000/month using an XGBoost classifier to recommend the most historically effective resolution strategy with 90% accuracy',
        'Delivered thousands of real-time operational strategies to air traffic controllers for disruption recovery problems every day',
        'Laid the foundation for ongoing research initiatives that continued beyond my internship, shaping the next phase of the project'
      ],
      skills: ['Java', 'Python', 'Azure', 'XGBoost', 'Machine Learning', 'Data Engineering']
    },
    {
      title: 'Teaching Assistant - Calculus I, II',
      company: 'Rutgers University - New Brunswick',
      location: 'Piscataway, NJ',
      period: 'August 2023 - May 2024',
      description: [
        'Led weekly recitation sessions for 100+ students, clarifying complex calculus concepts and problem-solving techniques',
        'Provided one-on-one tutoring and academic support, resulting in a huge improvements in student grades and passage rates',
        'Assisted in grading assignments and exams, ensuring fair and consistent evaluation of student performance',
        'Collaborated with professors to develop supplementary materials that enhanced the learning experience'
      ],
      skills: ['Communication', 'Tutoring', 'Mathematics', 'Leadership', 'Collaboration']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 shadow-elegant hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-accent mb-2">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span className="text-lg font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-secondary space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Skills Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}