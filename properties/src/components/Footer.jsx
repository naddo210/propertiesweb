import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, } from 'lucide-react';
import wasilogo from '../assets/images/WASIPROPERTY_LOGO.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className='flex justify-between items-center'>
  <img src={wasilogo} alt="WASI Property Logo" className="h-12 mb-4 rounded-md" />
            <h3 className="text-2xl font-serif mb-6">
              WASI <span className="font-light text-gray-400">Property</span>
            </h3>
            </div>
          
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium real estate solutions for the modern investor. Turning properties into possibilities since 2026.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm">info.wasiproperty@gmail.com</li>
              <li className="text-gray-300 text-sm">+91 7035394786</li>
              <li className="text-gray-300 text-sm">
                Navi Mumbai
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} WASI Property. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            ⊕  Website Design By <a className='text-blue-700' href="https://myport-547t.vercel.app/">Nadeem salmani.</a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-white transition-all transform hover:scale-110"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              aria-label="Youtube"
              className="text-gray-500 hover:text-white transition-all transform hover:scale-110"
            >
              <Youtube size={18} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-white transition-all transform hover:scale-110"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
