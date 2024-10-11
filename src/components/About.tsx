import React from 'react';
import { Award, Users, Lightbulb } from 'lucide-react';

const aboutCards = [
  {
    icon: <Award className="h-12 w-12 text-green-600 mb-4" />,
    title: 'Expert Team',
    description: 'Our consultants bring years of experience in social media strategy and digital marketing.'
  },
  {
    icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
    title: 'Client-Focused',
    description: 'We prioritize your unique needs and tailor our approach to your specific goals and audience.'
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-green-600 mb-4" />,
    title: 'Innovative Solutions',
    description: 'We stay ahead of trends to provide cutting-edge strategies for your social media success.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Team meeting in nature" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">About Sweet Success Consulting</h2>
            <p className="text-stone-600 mb-4">
              At Sweet Success Consulting, we're passionate about helping businesses thrive naturally in the digital ecosystem. Our team of expert consultants brings years of experience in organic social media growth, authentic content creation, and insightful analytics to every project.
            </p>
            <p className="text-stone-600">
              We believe in the power of genuine connections and data-driven strategies. Our tailored approach ensures that your brand's unique essence flourishes while achieving sustainable, measurable results.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div key={index} className="bg-stone-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">{card.title}</h3>
              <p className="text-stone-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;