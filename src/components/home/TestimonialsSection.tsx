import React from 'react';
import Card from '../common/Card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  message: string;
  image: string;
  category: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Santos",
      role: "School Principal",
      location: "Rural Guatemala",
      message: "Bright Path Foundation didn't just build us a school – they lit up our entire community's future. Our children now have access to quality education and digital resources we never dreamed possible.",
      image: "/api/placeholder/100/100",
      category: "education"
    },
    {
      id: 2,
      name: "Dr. James Okafor",
      role: "Community Health Leader",
      location: "Lagos, Nigeria",
      message: "When the floods came, Bright Path was there within 48 hours. Their emergency response team didn't just provide immediate relief – they stayed to help us rebuild stronger and more resilient.",
      image: "/api/placeholder/100/100",
      category: "disaster-relief"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Youth Coach",
      location: "Mumbai, India",
      message: "The Champions Rising program transformed our neighborhood. These young athletes aren't just playing sports – they're becoming leaders, mentors, and positive role models for the entire community.",
      image: "/api/placeholder/100/100",
      category: "sports"
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      role: "Community Kitchen Manager",
      location: "Mexico City, Mexico",
      message: "Our community kitchen serves 300 families daily now. But more than food, Bright Path brought us together, taught us nutrition, and helped us create a sustainable support network.",
      image: "/api/placeholder/100/100",
      category: "food-distribution"
    }
  ];

  const getCategoryIcon = (category: string) => {
    const icons = {
      'education': '📚',
      'disaster-relief': '🚨',
      'sports': '⚽',
      'food-distribution': '🍽️'
    };
    return icons[category as keyof typeof icons] || '🤝';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'education': 'bg-brand-blue-500',
      'disaster-relief': 'bg-red-500',
      'sports': 'bg-brand-green-500',
      'food-distribution': 'bg-brand-orange-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-orange-100 text-brand-orange-700 rounded-full text-sm font-semibold mb-4">
            Voices of Hope
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories from the 
            <span className="gradient-text"> Heart of Our Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear directly from the communities we serve – their words illuminate the true impact 
            of walking together on the path to brighter futures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-8 relative overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Icon */}
              <div className={`absolute top-6 right-6 w-12 h-12 ${getCategoryColor(testimonial.category)} rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                {getCategoryIcon(testimonial.category)}
              </div>

              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-brand-orange-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.message}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-brand-orange-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-brand-orange-600 font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-500 via-brand-orange-500 to-brand-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Share Your Story?
          </h3>
          <p className="text-gray-600 mb-6">
            If Bright Path Foundation has touched your life or community, we'd love to hear from you.
          </p>
          <button className="btn-primary">
            📝 Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;