import React from 'react';
import Admission from '../../components/Admission';


const classroomFeatures = ["Touch-Screen Smart Boards", "Ergonomic Furniture", "Natural Ventilation", "Theme-based Wall Art", "Surround Sound Audio", "Lockers for Students"];

const classroomStats = [
  { icon: "🎯", title: "Focus-Driven", desc: "Minimized distractions, maximized learning." },
  { icon: "🌬️", title: "Ventilated Zones", desc: "Fresh air circulates through every hour." },
  { icon: "📺", title: "Visual Learning", desc: "High-resolution displays in every room." }
];

const Classrooms = () => {
  return (
    <div className="pt-10 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-16 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Our Learning Environment</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Smart Classrooms</h1>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-primary font-serif border-l-8 border-accent pl-6">Comfort Meets Learning</h3>
            <p className="text-lg text-gray-600 font-medium italic leading-relaxed">
              "Each classroom is a space for imagination. Ergonomically designed with natural ventilation, smart boards, and vibrant decor to make every lesson an experience."
            </p>
            <ul className="space-y-2">
              {classroomFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-700 italic border-b pb-2 border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span> {f}
                </li>
              ))}
            </ul>

          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-[3rem] rotate-2 blur-sm opacity-20 group-hover:rotate-0 transition-transform duration-500"></div>
            <img src="/classrom-Mam.jpeg" alt="Classroom" className="relative rounded-[3rem] shadow-2xl border-4 border-white w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {classroomStats.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-50 text-center hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="font-black text-primary text-xl mb-2">{item.title}</h4>
              <p className="text-gray-500 font-medium italic text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 p-8 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-primary text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-15 -mt-15 blur-3xl group-hover:bg-accent/20 transition-all"></div>
          <h3 className="text-3xl font-black italic font-serif mb-3 text-accent">Join Our Smart Classrooms</h3>
          <p className="text-white/80 font-bold mb-8 uppercase tracking-widest text-sm">Empower your child with the best learning environment.</p>
          <div className="flex justify-center">
            <Admission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classrooms;
