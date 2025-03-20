
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a server
    
    toast.success('Message sent successfully! I will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Email</h3>
                    <a 
                      href="mailto:kmnaveeen1110@gmail.com" 
                      className="text-navy-700 hover:text-blue-600 transition-colors"
                    >
                      kmnaveeen1110@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Phone</h3>
                    <a 
                      href="tel:+917204529266" 
                      className="text-navy-700 hover:text-blue-600 transition-colors"
                    >
                      +91 7204529266
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Location</h3>
                    <p className="text-navy-700"> Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-800 text-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Connect on Social Media</h3>
              <div className="flex gap-4 relative z-10">
                <a 
                  href="https://linkedin.com/in/naveenkm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-700 hover:bg-navy-600 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/naveeenkm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-700 hover:bg-navy-600 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
