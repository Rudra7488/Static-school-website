import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://admin.vidyabharatischool.education/api/contact', formData);
      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: '', contact: '', message: '' });
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pt-10"></div>

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Start Your Journey</h1>
          <p className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2">Contact Us</p>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Contact Details Card */}
          <div className="relative group p-1 flex h-full">
            <div className="absolute inset-0  rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>

            <div className="relative w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between">

              <div>
                <h3 className="text-2xl font-black font-serif text-primary mb-6">
                  Reach Out to Us
                </h3>

                <p className="text-gray-500 font-medium mb-10 leading-relaxed">
                  Have questions about admissions or our curriculum? Our team is here to help you every step of the way.
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-xl shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase tracking-wider text-xs mb-1">
                        Our Location
                      </h4>
                      <p className="text-gray-600 font-bold">
                       Patrakar colony, Rampuri camp, Main road ,Amravati 444601
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-xl shrink-0">
                      📞
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase tracking-wider text-xs mb-1">
                        Call Us
                      </h4>
                      <p className="text-gray-600 font-bold">
                        <a 
                          href="tel:+919011372155" 
                          className="hover:text-primary transition-colors block cursor-pointer"
                        >
                          +91 90113 72155
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-accent/10 text-accent-dark rounded-2xl flex items-center justify-center text-xl shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase tracking-wider text-xs mb-1">
                        Email Us
                      </h4>
                      <p className="text-gray-600 font-bold">
                        <a 
                          href="mailto:principal@vidyabharatischool.education" 
                          className="hover:text-primary transition-colors block break-all cursor-pointer"
                        >
                          principal@vidyabharatischool.education
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* MAP SECTION */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Patrakar+Colony+Amravati&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-primary/40 text-[10px] font-black uppercase tracking-[0.2em]">
                  Established 2011 • Amravati
                </p>
              </div>

            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col h-full">
            {submitted ? (
              <div className="text-center py-8 my-auto">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">✓</div>
                <h3 className="text-2xl font-black font-serif text-primary mb-2">Message Sent!</h3>
                <p className="text-gray-500 font-bold mb-8">We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-primary text-white font-black rounded-full hover:bg-secondary transition-all"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black font-serif text-primary mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">Your Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">Contact Number</label>
                      <input
                        required
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">Your Message</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="How can we help you?"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-secondary text-white font-black py-4 mt-4 rounded-2xl hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-primary/30 uppercase tracking-widest text-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Sending...' : 'Send Message Now'}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
