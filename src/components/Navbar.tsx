
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const NavLink = ({ name, href }: { name: string; href: string }) => {
    return (
      <a 
        href={href}
        className="relative px-2 py-1 text-sm text-navy-900 transition-colors hover:text-blue-600 font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="relative z-10">{name}</span>
        <span className="absolute inset-0 transform origin-left scale-x-0 bg-blue-50 transition-transform duration-300 ease-out group-hover:scale-x-100 rounded -z-10"></span>
      </a>
    );
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="font-display text-navy-900 font-bold text-2xl">
          Naveen<span className="text-blue-600">.</span>
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm transition-colors hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </nav>
        
        {/* Mobile navigation toggle */}
        <button 
          className="md:hidden p-2 text-navy-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation menu with solid white background */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6 bg-white p-5">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-navy-900 hover:text-blue-600 transition-colors py-2 border-b border-gray-100/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-4 px-6 py-3 text-center font-medium text-white bg-blue-600 rounded-md shadow-sm transition-colors hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
