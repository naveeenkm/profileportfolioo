
import { Trophy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const achievements = [
    {
      title: "2nd Prize in Hack for Hire Hackathon [State level]",
      description: "Developed a full-stack website for a startup transporting preserved food materials. Built with Django, the platform included vehicle tracking features. The project secured 2nd place in a 36-hour competition.",
      link: "#",
    },
    // You can add more achievements here
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="animate-on-scroll mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Achievements
          </h2>
          <p className="text-navy-700 max-w-3xl">
            Recognitions and awards I've received for my work and participation in various competitions and events.
          </p>
        </div>

        <div className="space-y-8 animate-on-scroll">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full shrink-0">
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{achievement.title}</h3>
                  <p className="text-navy-700 mb-4">{achievement.description}</p>
                  {achievement.link && (
                    <Button variant="outline" size="sm" className="inline-flex items-center gap-2" asChild>
  <a 
    href="https://www.linkedin.com/posts/naveen-k-m-171109212_hackathon-hackforhire-innovation-activity-7222244051322859520--HW2?utm_source=share&utm_medium=member_desktop" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project <ExternalLink size={16} />
  </a>
</Button>

                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
