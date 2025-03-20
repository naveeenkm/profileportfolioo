
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Used Car Price Prediction Using ML",
      name:"Machine Learning",
      description: "An interactive application designed to predict the prices of used cars, offering an intuitive interface. The project emphasizes efficient data processing, model training, and deployment for accurate predictions.",
      period: "May 2024 to Aug 2024",
      technologies: ["Python", "Streamlit", "NumPy", "Pandas", "Pickle", "scikit-learn", "Google Colab"],
      role: "Developing Machine Learning Model and Working with Data Base",
      links: {
        demo: "https://car-priceprediction.streamlit.app/",
        github: "https://github.com/naveeenkm"
      }
    },
    {
      title: "E-Learning Platform",
      name:"Full Stack",
      description: "A responsive platform providing seamless user experience across devices. Focused on secure data handling and efficient management of large datasets, with robust backend implementation and an intuitive user interface.",
      period: "Jan 2024 to April 2024",
      technologies: ["Django Framework", "MySQL", "Python", "MyPhpAdmin", "HTML", "CSS"],
      role: "Developing Backend, Working with Data Base and Templates",
      links: {
        demo: "https://github.com/naveeenkm",
        github: "https://github.com/naveeenkm"
      }
    },
    {
      title: "Mobile App Development using Flutter",
        name:"Mobile",
      description: "Developed innovative mobile applications using Flutter, focusing on efficient cross-platform performance and intuitive user interfaces. Collaborated with design teams to implement features and state management.",
      period: "Nov 2023 to Dec 2023",
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
      role: "Mobile App Development, UI/UX Implementation",
      links: {
        demo: "https://github.com/naveeenkm",
        github: "https://github.com/naveeenkm"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            A collection of my recent projects showcasing my skills in various technologies and domains.
          </p>
        </div>

        <div className="space-y-16 stagger-children">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="bg-navy-800 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{project.title}</h3>
                    <div className="flex items-center gap-2 text-navy-100 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm">{project.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 text-xs font-medium bg-navy-700/50 text-navy-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-700 mb-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-navy-900 mb-2">My Role:</h4>
                      <p className="text-navy-700">{project.role}</p>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={project.links.demo} 
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.links.github} 
                        className="flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl shadow-lg aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">{index + 1}</div>
                      <div className="text-xl">{project.name}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-blue-500 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
