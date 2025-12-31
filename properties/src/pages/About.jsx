import { Shield, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">Redefining Luxury Real Estate</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded on the principles of integrity, excellence, and innovation, WASI Properties has established itself as a premier real estate firm catering to the world&apos;s most discerning clients.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] bg-gray-200 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1668911494509-14baf3b42fda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww" 
               alt="Modern Office" 
               className="w-full h-full object-cover"
             />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ahmed Shaikh is the founder of WASI PROPERTY, a trust-driven real estate consultancy focused on delivering verified and value-based property solutions. With a clear understanding of the local market and client needs, We believes that real estate is not just about buying or selling property, but about making the right decision for life and growth.

            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
          At WASI PROPERTY, every deal is handled with transparency, clarity, and long-term vision. Whether it’s residential, commercial, or land investment, the focus remains on genuine listings, fair guidance, and client satisfaction.
Trust, space, and growth form the foundation of every relationship built here.
            </p>
         
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Choose WASI</h2>
            <div className="h-1 w-20 bg-gray-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Verified Listings", desc: "MahaRERA Registered Property Consultant" },
              { icon: Users, title: "Client Focus", desc: "Your goals are our priority. We tailor our approach to you." },
              { icon: Target, title: "Expert Guidance", desc: "Navigating complex markets with data-backed strategies." },
              { icon: Award, title: "Award Winning", desc: "Recognized globally for excellence in real estate services." }
            ].map((item, index) => (
              <div key={index} className="p-8 border border-gray-800 bg-gray-800/50 hover:bg-gray-800 transition-colors text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 mb-6 text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
