import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const GOOGLE_SHEET_URL =
  "PASTE_YOUR_NEW_GOOGLE_SCRIPT_URL_HERE";

const WEB3FORMS_KEY =
  "eabef0a0-b2cb-4d59-ac72-03ca62cf1c9a";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Buy",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      /* 1️⃣ WEB3FORMS */
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...formData,
        }),
      });

      const web3Result = await web3Res.json();

      /* 2️⃣ GOOGLE SHEET */
      await fetch("https://script.google.com/macros/s/AKfycbz6-_K_4eipMJzSwiNJ_Byu-csb0cHfV4svAxH5Yh8t3W_TgznoKdiZLEEpx05b9ZLG/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-gray-400">
            Begin your journey with WASI Property
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* INFO */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex">
                <MapPin className="mr-4" />
                <p>Ulwe, Navi Mumbai, Maharashtra</p>
              </div>
              <div className="flex">
                <Mail className="mr-4" />
                <p>info.wasiproperty@gmail.com</p>
              </div>
              <div className="flex">
                <Phone className="mr-4" />
                <p>+91 7035394786</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border p-8 shadow-lg">
            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircle className="mx-auto h-14 w-14 text-green-500 mb-4" />
                <h3 className="text-xl font-serif">Message Sent</h3>
                <button
                  onClick={() => setStatus(null)}
                  className="underline mt-4"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border"
                />

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 border"
                >
                  <option>Buy</option>
                  <option>Sell</option>
                  <option>Rent</option>
                  <option>Consultation</option>
                </select>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border"
                />

                {status === "error" && (
                  <div className="flex text-red-600 text-sm">
                    <AlertCircle className="mr-2" /> Something went wrong
                  </div>
                )}

                <button
                  disabled={status === "submitting"}
                  className="w-full bg-gray-900 text-white py-3 uppercase"
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
