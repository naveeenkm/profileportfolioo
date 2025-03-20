
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Mobile App Development using Flutter",
      company: "Internship",
      period: "06-Nov-2023 to 16-Dec-2023",
      description: "Developed innovative mobile applications using Flutter, focusing on efficient cross-platform performance and intuitive user interfaces. Collaborated with design teams to implement features and state management to enhance user experience and app responsiveness."
    },
    {
      title: "Cybersecurity in Edunet Foundation",
      company: "Internship",
      period: "Oct-2023 to Nov-2023",
      description: "Implemented intermediate steganography techniques to secure digital communications, embedding sensitive data within various media formats. Focused on improving encryption methods to maintain data confidentiality and integrity."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-navy-50 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100/50 rounded-full mb-4">
            Professional Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Work & Internships
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl">
            My professional journey and practical experience in the technology industry.
          </p>
        </div>

        <div className="relative pl-8 stagger-children">
          {/* Timeline line */}
          <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 border-4 border-white"></div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all ml-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">{experience.title}</h3>
                    <p className="text-navy-600">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-navy-50 text-navy-600 rounded-full">
                    <Calendar size={16} />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>
                <p className="text-navy-700">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-md border border-gray-100 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-full">
              <Briefcase size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Looking for New Opportunities</h3>
              <p className="text-navy-700 mb-4">
                I'm currently seeking internships and entry-level positions where I can apply my skills 
                and grow as a developer. If you're looking for a dedicated team member with strong technical 
                skills and problem-solving abilities, I'd love to connect.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md transition-colors hover:bg-blue-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
