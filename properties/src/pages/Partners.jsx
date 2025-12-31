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

const Partners = () => {
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

  return (
    <div className="w-full">
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">Our Network</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Collaborating with the world&apos;s most prestigious brands and institutions to deliver excellence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 border border-gray-100 flex items-center justify-center hover:shadow-lg transition-all duration-300 group rounded-sm h-40">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-24 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-6">Become a Partner</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Join our exclusive network of real estate professionals and luxury brands.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors uppercase tracking-wider">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;
