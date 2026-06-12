import React from 'react';
import Admission from '../../components/Admission';

const physicsFeatures = [
  "Advanced Microscopes & Optics",
  "Chemical Safety Hoods",
  "Individual Work Benches",
  "Expert Lab Assistants",
  "Modern Glassware & Reagents"
];

const biologyFeatures = [
  "Digital Biological Charts",
  "High-Resolution Specimen Displays",
  "Anatomy & Physiology Models",
  "Microbiology Culture Zone"
];

const techStats = [
  { stat: "3+", label: "Specialized Labs" },
  { stat: "100%", label: "Safety Rating" },
  { stat: "500+", label: "Instruments" },
  { stat: "15+", label: "Weekly Sessions" }
];

const Laboratories = () => {
  return (
    <div className="pt-10 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Science & Innovation</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">High-Tech Laboratories</h1>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-2 opacity-20 group-hover:rotate-0 transition-transform duration-500 blur-sm"></div>
            <img src="/lab.jpeg" alt="Science Lab" className="relative w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-primary font-serif border-l-8 border-accent pl-6">Physics & Chemistry</h3>
            <p className="text-lg text-gray-600 font-medium italic leading-relaxed">
              "Experience the power of practical knowledge. Our labs are designed to follow global safety standards while providing the best equipment for experiments."
            </p>
            <ul className="space-y-3">
              {physicsFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-gray-700 border-b border-gray-100 pb-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Section 2 (Zig-Zag) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 py-10">
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-3xl font-black text-primary font-serif border-r-8 border-accent pr-6 text-right">Biology & Research</h3>
            <p className="text-lg text-gray-600 font-medium italic leading-relaxed text-right">
              "Explore the wonders of life through our state-of-the-art Biology lab, where students engage in hands-on research and anatomical studies."
            </p>
            <ul className="space-y-3">
              {biologyFeatures.map((f, i) => (
                <li key={i} className="flex items-center justify-end gap-4 font-bold text-gray-700 border-b border-gray-100 pb-3">
                  {f}
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-[3rem] -rotate-2 opacity-20 group-hover:rotate-0 transition-transform duration-500 blur-sm"></div>
            <img src="/Laboratory.jpeg" alt="Biology Lab" className="relative w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
          </div>
        </div>

        {/* Tech Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {techStats.map((item, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 text-center shadow-xl border border-gray-50 hover:-translate-y-2 transition-all group">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all">{item.stat}</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-primary text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-15 -mt-15 blur-3xl group-hover:bg-accent/20 transition-all"></div>
          <h3 className="text-3xl font-black italic font-serif mb-3 text-accent">Discover through Doing</h3>
          <p className="text-white/80 font-bold mb-8 uppercase tracking-widest text-sm">Where theory meets practice in every experiment.</p>
          <div className="flex justify-center">
            <Admission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratories;
