import React from 'react';
import { 
  Calendar, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Smartphone 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: <Calendar className="h-7 w-7 text-blue-600" />,
      title: 'Smart Scheduling',
      description: 'Automated timetable generation and conflict resolution for optimal resource utilization.'
    },
    {
      icon: <FileText className="h-7 w-7 text-emerald-600" />,
      title: 'Digital Assignments',
      description: 'Paperless assignment submission and grading system with plagiarism detection.'
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-orange-600" />,
      title: 'Real-time Communication',
      description: 'Instant messaging and notifications to keep all students connected.'
    },
    {
      icon: <BarChart3 className="h-7 w-7 text-purple-600" />,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics dashboard with detailed performance insights.'
    },
    {
      icon: <Shield className="h-7 w-7 text-red-600" />,
      title: 'Data Security',
      description: 'Enterprise-grade security with role-based access control and data encryption.'
    },
    {
      icon: <Smartphone className="h-7 w-7 text-green-600" />,
      title: 'Mobile Responsive',
      description: 'Access your educational platform anywhere, anytime with our mobile-optimized design.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools you need to streamline 
            educational processes and enhance learning outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};