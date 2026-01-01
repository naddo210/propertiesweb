import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Buy',
    message: ''
  });
  
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eabef0a0-b2cb-4d59-ac72-03ca62cf1c9a", // Replace with your Web3Forms Access Key
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', type: 'Buy', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <section className="bg-gray-900 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Begin your journey with WASI Property. Our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Get In Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-gray-900 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Office</h4>
                  <p className="text-gray-600">Ulwe navi mumbai <br /> Maharashtra</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-gray-900 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info.wasiproperty@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-gray-900 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 7035394786</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-serif text-xl text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-lg">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-gray-900 mb-2">Message Sent</h3>
                <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setStatus(null)} className="mt-6 text-gray-900 underline hover:text-gray-600">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                <div>
  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
    Phone Number
  </label>

  <input
    type="tel"
    id="phone"
    name="phone"
    required
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
      setFormData({ ...formData, phone: value });
    }}
    inputMode="numeric"
    pattern="[0-9]*"
    maxLength={10}
    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors"
    placeholder="8787877878"
  />
</div>

                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                  >
                    <option value="Buy">Buying a Property</option>
                    <option value="Sell">Selling a Property</option>
                    <option value="Rent">Renting a Property</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
