
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-900 text-white py-12 overflow-hidden relative">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToTop}
          className="p-3 bg-white text-navy-900 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              Naveen<span className="text-blue-500">.</span>
            </div>
            <p className="text-navy-300 max-w-xs">
              A passionate Computer Science student with a focus on problem-solving and innovative solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-navy-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-navy-300 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-navy-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-navy-300 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-navy-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-navy-300">
                <span className="block">Email:</span>
                <a href="mailto:kmnaveeen1110@gmail.com" className="hover:text-white transition-colors">
                  kmnaveeen1110@gmail.com
                </a>
              </li>
              <li className="text-navy-300">
                <span className="block">Phone:</span>
                <a href="tel:+917204529266" className="hover:text-white transition-colors">
                  +91 7204529266
                </a>
              </li>
              <li className="text-navy-300">
                <span className="block">Location:</span>
                <span>Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-navy-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Naveen Kumar. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/naveenkm" 
              className="text-navy-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/naveeenkm" 
              className="text-navy-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
