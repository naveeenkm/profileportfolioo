
import { GraduationCap } from 'lucide-react';

const About = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering (CSE)",
      institution: "Shivamogga",
      period: "2021 - ongoing",
      description: "CGPA - 9.05 (7th Semester)",
    },
    {
      degree: "Pre-University",
      institution: "",
      period: "2019 - 2021",
      description: "Percentage - 94.6%",
    },
    {
      degree: "SSLC",
      institution: "",
      period: "2018 - 2019",
      description: "Percentage - 91.8%",
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">
            Education & Background
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="prose max-w-none text-navy-700">
              <p className="text-lg mb-6">
                I'm a motivated Computer Science student dedicated to solving complex problems through innovative solutions. With a strong foundation in programming and software development, I aim to create impactful applications that enhance user experiences.
              </p>
              <p className="text-lg mb-6">
                My academic journey has equipped me with both theoretical knowledge and practical skills in various programming languages and frameworks. I'm particularly interested in machine learning, web development, and creating intuitive user interfaces.
              </p>
              <p className="text-lg">
                Outside of academics, I'm constantly exploring new technologies, participating in hackathons, and contributing to open-source projects to expand my skills and make a positive impact in the tech community.
              </p>
            </div>
          </div>

          <div className="space-y-6 stagger-children">
            <div className="education-timeline">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Education</h3>
              </div>

              <div className="space-y-6 pl-4 border-l border-blue-100">
                {educationData.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-2">
                    <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="text-lg font-semibold text-navy-900">{item.degree}</div>
                      {item.institution && <div className="text-navy-600">{item.institution}</div>}
                      <div className="text-navy-500 text-sm mt-1">{item.period}</div>
                      <div className="mt-2 text-navy-700">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
