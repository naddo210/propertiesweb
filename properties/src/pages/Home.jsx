import { ArrowRight, Home as HomeIcon, Key, BarChart3, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Partner Imports
import Arihant from '../assets/images/Arihant_logo.jpeg';
import Bhagwati from '../assets/images/Bhagwati_logo.jpeg';
import Gami from '../assets/images/Gami_logo.webp';
import Godrej from '../assets/images/Godrage_logo.png';
import Haware from '../assets/images/Haware_logo.jpeg';
import Hiranandani from '../assets/images/Hiranandani-Group-logo.jpeg';
import Keni from '../assets/images/Keni_logi.jpg';
import Lodha from '../assets/images/Lodha_logo.png';
import Raheja from '../assets/images/Raheja_logo.png';
import Rudra from '../assets/images/Rudra_logo.png';
import SMBuilder from '../assets/images/SM_BUILDER.png';
import Shree from '../assets/images/Shree_logo.png';
import Subham from '../assets/images/Subham_logo.jpeg';
import Tricity from '../assets/images/Tricity_logo.png';
import LandT from '../assets/images/l-and-t-logo.webp';
import Paradise from '../assets/images/paradise-group-logo.jpeg';
import Runwal from '../assets/images/runwal-logo.png';
import Siddhivinayak from '../assets/images/siddhivinayak-homes_logo.jpg';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Property Investor",
      text: "WASI Properties transformed my investment portfolio. Their market insights are unmatched in the luxury sector."
    },
    {
      name: "Nadeem Salamni",
      role: "Home Buyer",
      text: "The level of professionalism and attention to detail made finding our dream penthouse an absolute pleasure."
    },
    {
      name: "Alisha Khan",
      role: "Commercial Client",
      text: "Efficient, transparent, and exclusively high-end. Exactly what our firm needed for our new headquarters."
    }
  ];

  const partners = [
    { name: "Arihant", logo: Arihant },
    { name: "Bhagwati", logo: Bhagwati },
    { name: "Gami", logo: Gami },
    { name: "Godrej", logo: Godrej },
    { name: "Haware", logo: Haware },
    { name: "Hiranandani", logo: Hiranandani },
    { name: "Keni", logo: Keni },
    { name: "Lodha", logo: Lodha },
    { name: "Raheja", logo: Raheja },
    { name: "Rudra", logo: Rudra },
    { name: "SM Builder", logo: SMBuilder },
    { name: "Shree", logo: Shree },
    { name: "Subham", logo: Subham },
    { name: "Tricity", logo: Tricity },
    { name: "L&T", logo: LandT },
    { name: "Paradise", logo: Paradise },
    { name: "Runwal", logo: Runwal },
    { name: "Siddhivinayak", logo: Siddhivinayak },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
        />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Turning Properties <br className="hidden md:block" /> Into Possibilities
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Trusted real estate solutions for buying, selling & renting in the most exclusive neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Link to="/services" className="px-8 py-4 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto uppercase tracking-wider text-sm">
              Explore Services
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto uppercase tracking-wider text-sm flex items-center justify-center">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-gray-200 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: HomeIcon, title: "Buying & Selling", desc: "Exclusive access to off-market listings and premium buyers." },
              { icon: Key, title: "Luxury Rentals", desc: "Curated selection of high-end rental properties for short or long stays." },
              { icon: BarChart3, title: "Investment Advice", desc: "Data-driven insights to maximize your real estate portfolio returns." }
            ].map((service, index) => (
              <div key={index} className="group p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                  <service.icon className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Client Stories</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on building lasting relationships with our clients. 
                Here is what they have to say about their experience with WASI Properties.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-3 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-3 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                >
                  <div className="bg-white p-10 shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      </div>
                      <p className="text-gray-800 text-lg italic mb-6">&quot;{testimonial.text}&quot;</p>
                    </div>
                    <div>
                      <h4 className="font-serif text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Slider (Infinite Loop) */}
      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Trusted By Industry Leaders</p>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center space-x-16 mx-8">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center h-16 w-32 opacity-50 hover:opacity-100 transition-opacity">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all" 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to find your dream property?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact our team of experts today to schedule a private viewing or consultation.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors uppercase tracking-wider">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
