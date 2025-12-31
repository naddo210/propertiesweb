import { ArrowRight, Home, Key, TrendingUp, Search ,MapPin} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Property Buying",
      description: "Access an exclusive portfolio of off-market listings and premium properties. We guide you through every step of the acquisition process, from initial search to closing.",
      features: ["Personalized Property Search", "Market Valuation & Analysis", "Negotiation Strategy", "Legal & Financial Coordination"],
      icon: Home
    },
    {
      id: 2,
      title: "Property Selling",
      description: "Maximize your property's value with our bespoke marketing strategies. We leverage our global network of high-net-worth individuals to find the right buyer.",
      features: ["Professional Staging & Photography", "Global Marketing Campaigns", "Qualified Buyer Screening", "Seamless Transaction Management"],
      icon: TrendingUp
    },
    {
      id: 3,
      title: "Rental Services",
      description: "Whether you're looking for a short-term luxury stay or a long-term residence, our rental division offers a curated selection of the finest homes.",
      features: ["Premium Rental Portfolio", "Lease Negotiation", "Tenant Screening (for Landlords)", "Property Management Integration"],
      icon: Key
    },
    {
      id: 4,
      title: "Real Estate Consultation",
      description: "Make informed decisions with our expert advisory services. We provide data-driven insights for investors, developers, and homeowners.",
      features: ["Investment Portfolio Analysis", "Development Consulting", "Market Trends Reports", "Asset Management Advice"],
      icon: Search
    },
  {
  id: 5,
  title: "Plot & Land Selling",
  description:
    "Premium land and plot selling services tailored for investors, developers, and individual buyers. We ensure verified properties, clear documentation, and high-value returns.",
  features: [
    "Residential & Commercial Plots",
    "Verified Land Titles",
    "Prime Location Listings",
    "End-to-End Sale Assistance"
  ],
  icon: MapPin
}
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Services</h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Comprehensive real estate solutions designed for the modern luxury market.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <h2 className="text-3xl font-serif text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="h-1.5 w-1.5 bg-gray-900 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center text-sm font-bold text-gray-900 uppercase tracking-widest hover:text-gray-600 transition-colors">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex-1 w-full h-[400px] bg-gray-100 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10" />
                  {/* Placeholder for service image */}
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1512917774080-9991f1c4c750', // home
                      '1560518883-ce09059eeffa', // selling
                      '1560520653-9e0e4c89eb11', // keys/rent
                      '1454165804606-c3d57bc86b40'  // consult
                    ][index % 4]}?auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-gray-900 mb-6">Unsure what you need?</h2>
          <p className="text-gray-600 mb-8">
            Schedule a free consultation with one of our senior advisors to discuss your real estate goals.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors uppercase tracking-wider text-sm">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
