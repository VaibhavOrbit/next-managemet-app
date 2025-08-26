"use client"
import React, { useState } from 'react';
import { User, Users, BookOpen, ArrowRight, Check } from 'lucide-react';

type UserType = 'student' | 'parent' | 'teacher';

interface SignupCardProps {
  type: UserType;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  bgColor: string;
}

const SignupCard: React.FC<SignupCardProps> = ({ 
  type, 
  title, 
  description, 
  icon, 
  features, 
  color, 
  bgColor 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-${color.split('-')[1]}-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center mb-6">
        <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full ${color.replace('bg-', 'bg-')} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center group`}>
        Sign Up as {title}
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export const SignupSection: React.FC = () => {
  const signupOptions: SignupCardProps[] = [
    {
      type: 'student',
      title: 'Student',
      description: 'Access your courses, assignments, and track your academic progress',
      icon: <User className="h-8 w-8 text-white" />,
      features: [
        'View course schedules and materials',
        'Submit assignments online',
        'Track grades and progress',
        'Communicate with teachers',
        'Access digital library resources'
      ],
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      type: 'parent',
      title: 'Parent',
      description: 'Stay connected with your child\'s educational journey and progress',
      icon: <Users className="h-8 w-8 text-white" />,
      features: [
        'Monitor child\'s academic progress',
        'Receive real-time notifications',
        'Schedule parent-teacher meetings',
        'View attendance records',
        'Access fee payment portal'
      ],
      color: 'bg-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      type: 'teacher',
      title: 'Teacher',
      description: 'Manage your classes, students, and academic resources efficiently',
      icon: <BookOpen className="h-8 w-8 text-white" />,
      features: [
        'Create and manage course content',
        'Grade assignments and exams',
        'Track student attendance',
        'Generate progress reports',
        'Communicate with parents'
      ],
      color: 'bg-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="signup" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Role
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the option that best describes you to get started with our platform. 
            Each role is tailored with specific features and tools to enhance your educational experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signupOptions.map((option) => (
            <SignupCard key={option.type} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};