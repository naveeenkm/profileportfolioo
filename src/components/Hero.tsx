
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-navy-200 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-children">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
              Computer Science Student
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4 tracking-tight">
              Naveen Kumar<span className="text-blue-600">.</span>
            </h1>
            <p className="text-lg text-navy-700 mb-6 max-w-lg">
              Motivated and skilled Computer Science student inclined towards problem-solving, with strong work ethic and collaborative mindset to drive project success.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-sm transition-all hover:bg-blue-700 hover:shadow-md flex items-center gap-2"
              >
                Get in Touch
                <Mail size={18} />
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 text-base font-medium text-navy-800 bg-white border border-navy-200 rounded-md shadow-sm transition-all hover:border-navy-300 hover:shadow-md"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/in/naveenkm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-navy-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="https://github.com/naveeenkm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-navy-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
              <a 
                href="mailto:kmnaveeen1110@gmail.com" 
                className="p-2 text-navy-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white border border-navy-100 shadow-xl rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-navy-900 p-6 text-center">
                    <div className="font-mono text-sm bg-navy-50 p-2 rounded mb-4 text-navy-700">Computer Science Student</div>
                    <div className="mb-4 text-xl font-bold">NAVEEN KUMAR K M</div>
                    <div className="text-navy-700 text-sm mb-2">
                      <span className="bg-blue-50 px-2 py-1 rounded">Python</span>{" "}
                      <span className="bg-blue-50 px-2 py-1 rounded">Java</span>{" "}
                      <span className="bg-blue-50 px-2 py-1 rounded">React</span>
                    </div>
                    <div className="text-navy-700 text-sm mb-4">
                      <span className="bg-blue-50 px-2 py-1 rounded">MySQL</span>{" "}
                      <span className="bg-blue-50 px-2 py-1 rounded">Django</span>
                    </div>
                    <div className="border-t border-navy-100 pt-4 text-sm text-navy-600">
                      <div className="mb-1">CGPA - 9.05 (7th Semester)</div>
                      <div>Bachelor of Engineering (CSE)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-navy-500 hover:text-blue-600 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
