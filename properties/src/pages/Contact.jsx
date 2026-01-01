import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Buy",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      /* =======================
         1️⃣ Send to Web3Forms
      ======================= */
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eabef0a0-b2cb-4d59-ac72-03ca62cf1c9a",
          ...formData,
        }),
      });

      const web3Result = await web3Response.json();

      /* =======================
         2️⃣ Send to Google Sheet
      ======================= */
      await fetch("https://script.google.com/macros/s/AKfycby5Bv7-fh0xD7r4igQXmXmFZ5M4ZmwJZx70fQ3aJOGeWejUel_OjnRYiaWjireiQwQ/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (web3Result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          type: "Buy",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-lg text-gray-400">
            Begin your journey with WASI Property. Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* INFO */}
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Get In Touch</h2>

            <div className="space-y-8 mb-12">
              <div className="flex">
                <MapPin className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Office</h4>
                  <p className="text-gray-600">
                    Ulwe, Navi Mumbai <br /> Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex">
                <Mail className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info.wasiproperty@gmail.com</p>
                </div>
              </div>

              <div className="flex">
                <Phone className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 7035394786</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 border">
              <h3 className="font-serif text-xl mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border p-8 shadow-lg">
            {status === "success" ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-serif mb-2">Message Sent</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We’ll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-6 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border"
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border"
                  />
                </div>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border"
                >
                  <option value="Buy">Buying Property</option>
                  <option value="Sell">Selling Property</option>
                  <option value="Rent">Renting</option>
                  <option value="Consultation">Consultation</option>
                </select>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border resize-none"
                />

                {status === "error" && (
                  <div className="flex items-center text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Something went wrong. Try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-gray-900 text-white uppercase tracking-wide"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
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
