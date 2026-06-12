import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AdmissionFormComponent = ({ showHeader = true, onlyForm = false, variant = 'large' }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    contactNumber: '',
    grade: '',
    previousSchool: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isMedium = variant === 'medium';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://admin.vidyabharatischool.education/api/admission', formData);
      if (response.data.success) {
        toast.success('Inquiry submitted successfully! 🎓');
        setSubmitted(true);
        setFormData({
          studentName: '',
          parentName: '',
          contactNumber: '',
          grade: '',
          previousSchool: '',
          message: ''
        });
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to submit inquiry. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`${onlyForm ? '' : isMedium ? 'bg-white p-8 rounded-3xl shadow-xl border-t-4 border-secondary max-w-lg mx-auto' : 'bg-white p-12 rounded-[3rem] shadow-2xl border-t-8 border-secondary max-w-2xl mx-auto'} text-center`}>
        <div className={`${isMedium ? 'w-12 h-12 text-2xl mb-4' : 'w-20 h-20 text-4xl mb-6'} bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto`}>✓</div>
        <h2 className={`${isMedium ? 'text-2xl mb-2' : 'text-3xl mb-4'} font-black text-primary font-serif`}>Thank You!</h2>
        <p className={`${isMedium ? 'text-sm mb-6' : 'text-gray-600 mb-8'} font-bold leading-relaxed`}>
          Your inquiry for 2026-27 has been received.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className={`${isMedium ? 'py-3 px-8 text-sm' : 'py-4 px-10'} bg-primary text-white font-black rounded-full hover:bg-secondary transition-all shadow-lg`}
        >
          FILL AGAIN
        </button>
      </div>
    );
  }

  const renderFormFields = () => (
    <form onSubmit={handleSubmit} className={isMedium ? "space-y-4" : "space-y-6"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-primary font-black text-[10px] uppercase tracking-widest ml-1">Student Name</label>
          <input
            required
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            type="text"
            placeholder="Student's Name"
            className={`w-full ${isMedium ? 'px-4 py-3 text-sm' : 'px-6 py-4'} bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700`}
          />
        </div>
        <div className="space-y-1">
          <label className="text-primary font-black text-[10px] uppercase tracking-widest ml-1">Parent Name</label>
          <input
            required
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            type="text"
            placeholder="Parent's Name"
            className={`w-full ${isMedium ? 'px-4 py-3 text-sm' : 'px-6 py-4'} bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-1">
          <label className="text-primary font-black text-[10px] uppercase tracking-widest ml-1">Contact No.</label>
          <input
            required
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={`w-full ${isMedium ? 'px-4 py-3 text-sm' : 'px-6 py-4'} bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-primary font-black text-[10px] uppercase tracking-widest ml-1">Grade</label>
          <select
            required
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className={`w-full ${isMedium ? 'px-4 py-3 text-sm' : 'px-6 py-4'} bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-black text-gray-700 appearance-none`}
          >
            <option value="">Select Grade</option>
            <option value="Nursery">Pre-Primary</option>
            <option value="Primary">Primary (1ˢᵗ-5ᵗʰ)</option>
            <option value="Secondary">Secondary (6ᵗʰ-10ᵗʰ)</option>
            <option value="JuniorCollege">Junior College</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-primary font-black text-[10px] uppercase tracking-widest ml-1">Previous School</label>
          <input
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            type="text"
            placeholder="Last School"
            className={`w-full ${isMedium ? 'px-4 py-3 text-sm' : 'px-6 py-4'} bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700`}
          />
        </div>
      </div>

      {!isMedium && (
        <div className="space-y-2">
          <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">Additional Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Any specific queries..."
            className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700 resize-none"
          ></textarea>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-secondary text-white font-black ${isMedium ? 'py-4' : 'py-5'} rounded-xl hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-primary/30 uppercase tracking-widest text-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'SUBMITTING...' : isMedium ? 'SUBMIT INQUIRY' : 'SUBMIT INQUIRY NOW'}
      </button>
    </form>
  );

  if (onlyForm) {
    return renderFormFields();
  }

  return (
    <div className="max-w-4xl mx-auto">
      {showHeader && (
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Secure Your Seat</h1>
          <p className="mt-4 text-gray-500 font-bold tracking-widest uppercase text-xs italic">Admission Inquiry Form</p>
        </div>
      )}

      <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_2fr]">

        {/* Left Side Info */}
        <div className="bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full -ml-20 -mb-20"></div>

          <h3 className="text-3xl font-black font-serif italic mb-8 relative z-10">Why Choose Vidya Bharati?</h3>
          <ul className="space-y-6 relative z-10">
            {[
              { icon: "🎓", text: "Holistic Academic Excellence" },
              { icon: "🏫", text: "Modern Digital Infrastructure" },
              { icon: "⚽", text: "Professional Sports Training" },
              { icon: "👩‍🏫", text: "Expert & Caring Faculty" }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 font-bold text-blue-100">
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20 italic text-sm">
            Note: This is an inquiry form. Final admission is subject to document verification and interview.
          </div>
        </div>

        {/* Form Side */}
        <div className="p-10 md:p-16">
          {renderFormFields()}
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormComponent;
