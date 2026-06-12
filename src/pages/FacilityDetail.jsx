import React from 'react';
import { useParams } from 'react-router-dom';

const FacilityDetail = () => {
  const { category } = useParams();

  const data = {
    lab: {
      title: "Scientific Laboratories",
      subtitle: "The Hub of Discovery",
      desc: "Our Physics, Chemistry, and Biology labs are designed to instill scientific temper. With high-end microscopes, chemical analyzers, and safety-certified experimental zones, we provide a playground for future scientists.",
      icon: "🧪",
      img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: ["Precision Instruments", "Burner & Gas Safety", "Individual Workstations", "Scientific Exhibits", "Certified Lab Techs", "Safety Showers"]
    },
    classroom: {
      title: "Smart Classrooms",
      subtitle: "Comfort Meets Learning",
      desc: "Each classroom is a gallery of learning, featuring high-speed connectivity and ergonomic environments. We use multi-sensory tools to explain complex concepts in simple ways.",
      icon: "🏫",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
      features: ["Ergonomic Seating", "Touch-Screen Boards", "Natural Ventilation", "Theme-based Decor", "Audio Systems", "Student Lockers"]
    },
    "academic-block": {
      title: "Academic Main Block",
      subtitle: "Centre for Excellence",
      desc: "The architectural marvel of our school, housing administrative offices, primary & secondary wings, and the Central Library. Designed for focus, flow, and high academic performance.",
      icon: "🏢",
      img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=1200&h=600&fit=crop",
      features: ["Central Admin Hub", "Staff Collaboration Zones", "Counseling Cells", "Modern Architecture", "CCTV Monitoring", "Clean Drinking Water"]
    },
    sports: {
      title: "Sports & Fitness Arena",
      subtitle: "Champions are Made Here",
      desc: "From Olympic-grade athletics tracks to professional-size football grounds, our sports arena is a testament to our focus on physical well-being and competitive spirit.",
      icon: "⚽",
      img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1200&h=600&fit=crop",
      features: ["Turf Football Field", "Clay Tennis Courts", "Olympic Track", "Indoor Games Hub", "First Aid Station", "Changing Rooms"]
    },
    digital: {
      title: "Digital & AI Domain",
      subtitle: "preparing for the Future",
      desc: "A dedicated digital wing featuring 1:1 computer access, AI learning modules, and a fully digitized curriculum. We don't just use tech; we build the future with it.",
      icon: "💻",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=600&fit=crop",
      features: ["1:1 Student-PC Ratio", "High-Speed Fiber Net", "AI Learning Tools", "Robotics Kits", "Coding Workstations", "VR Learning Lab"]
    }
  };

  const current = data[category] || data.lab;

  return (
    <div className="pt-20 pb-8 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Breadcrumb styling */}
        <div className="mb-8 flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
           <a href="/" className="hover:text-primary">Home</a>
           <span>/</span>
           <span className="text-secondary underline decoration-accent underline-offset-4 decoration-2">Facilities</span>
           <span>/</span>
           <span className="text-primary">{current.title}</span>
        </div>

        {/* Dynamic Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center mb-10">
           <div className="space-y-4">
              <span className="bg-accent text-primary px-6 py-1.5 rounded-full font-black text-xs uppercase tracking-[0.3em] inline-block shadow-md">
                 {current.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-black font-serif text-primary leading-tight">
                 {current.title} <span className="text-secondary italic">Unit</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-medium italic border-l-8 border-secondary pl-8">
                "{current.desc}"
              </p>
           </div>
           
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] rotate-3 blur-md opacity-20 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                 <img src={current.img} alt={current.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                 <div className="absolute bottom-10 left-10 text-6xl shadow-xl">{current.icon}</div>
              </div>
           </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {current.features.map((feat, i) => (
             <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col items-center text-center hover:scale-105 transition-all group">
                <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                   <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <h4 className="font-black text-primary uppercase text-sm tracking-widest">{feat}</h4>
             </div>
           ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-12 rounded-[3.5rem] bg-gradient-to-r from-primary via-secondary to-primary text-center text-white shadow-2xl relative overflow-hidden group">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-all"></div>
           <h3 className="text-3xl font-black font-serif mb-4 italic">Experience it in person!</h3>
           <p className="text-white/80 font-bold mb-8 uppercase tracking-widest">Walk through our campus to see these facilities first-hand.</p>
           <a href="/#contact" className="inline-block bg-accent text-primary font-black px-12 py-5 rounded-full hover:bg-white transition-all shadow-xl text-lg">
              BOOK A CAMPUS TOUR ✨
           </a>
        </div>

      </div>
    </div>
  );
};

export default FacilityDetail;
