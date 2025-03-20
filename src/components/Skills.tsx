
import { Code, Database, Server, Cpu, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "Java", "C++", "C", "JavaScript", "HTML/CSS", "PHP"]
    },
    {
      title: "Tools",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Git", "GitHub", "VS Code", "JetBrains IDEs"]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MySQL", "SQLite", "PostgreSQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="w-5 h-5" />,
      skills: ["Django", "Flask", "React.js", "Node.js", "Streamlit", "NumPy", "Pandas"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: ["Problem-solving", "Communication", "Time management", "Teamwork", "Leadership", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-navy-50 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100/50 rounded-full mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            I've developed a diverse set of skills through academic projects, personal exploration, 
            and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-medium bg-navy-50 text-navy-700 rounded-full hover:bg-navy-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy-800 text-white rounded-xl p-8 shadow-lg overflow-hidden animate-on-scroll relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Looking for opportunities</h3>
            <p className="text-navy-100 mb-6 max-w-3xl">
              I'm currently seeking opportunities to apply my skills in a real-world setting, whether through internships, 
              collaboration on interesting projects, or full-time positions. If you're looking for a dedicated programmer 
              with strong problem-solving skills, let's connect!
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md transition-colors hover:bg-blue-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
