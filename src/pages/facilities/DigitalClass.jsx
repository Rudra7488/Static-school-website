import React from 'react';
import Admission from '../../components/Admission';

const DigitalClass = () => {
  return (
    <div className="pt-10 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-16 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Technology-First Learning</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Digital & AI Domain</h1>
           <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-2 opacity-20 group-hover:rotate-0 transition-transform duration-500 blur-sm"></div>
            <img src="/digital.jpeg" alt="Digital Class" className="relative w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-primary font-serif border-l-8 border-accent pl-6">Future Ready Learning</h3>
            <p className="text-lg text-gray-600 font-medium italic leading-relaxed">
              "We don't just teach technology — we empower students to create with it. Our Digital Domain features AI tools, Robotics, and full-stack coding resources."
            </p>
            <ul className="space-y-3">
              {[
                "1:1 Computer Access for Every Student",
                "Interactive Smart Boards in Every Room",
                "High-Speed Fiber Internet",
                "AI & Machine Learning Modules",
                "Robotics Kits & VR Lab",
                "Coding Clubs (Python, Web Dev)"
              ].map((f, i) => (
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
            <h3 className="text-3xl font-black text-primary font-serif border-r-8 border-accent pr-6 text-right">Innovation & Robotics</h3>
            <p className="text-lg text-gray-600 font-medium italic leading-relaxed text-right">
              "Our students don't just consume technology; they create it. From building autonomous robots to exploring virtual worlds, we prepare them for the careers of tomorrow."
            </p>
            <ul className="space-y-3">
              {[
                "Advanced Robotics Lab (Class 5-12)",
                "Virtual Reality Learning Hub",
                "AI & Machine Learning Projects",
                "3D Printing & Design Studio"
              ].map((f, i) => (
                <li key={i} className="flex items-center justify-end gap-4 font-bold text-gray-700 border-b border-gray-100 pb-3">
                  {f}
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-[3rem] -rotate-2 opacity-20 group-hover:rotate-0 transition-transform duration-500 blur-sm"></div>
            <img src="/computer.jpeg" alt="Robotics Lab" className="relative w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
          </div>
        </div>

        {/* Tech Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "50+", label: "Computers" },
            { stat: "1 Gbps", label: "Net Speed" },
            { stat: "12+", label: "Coding Clubs" },
            { stat: "100%", label: "Smart Rooms" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 text-center shadow-xl border border-gray-50 hover:-translate-y-2 transition-all group">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all">{item.stat}</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Three highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: "🤖", title: "Robotics Lab", desc: "Students build, code, and race their own robots in our dedicated Robotics Lab." },
            { icon: "🌐", title: "Web Dev Studio", desc: "Learn HTML, CSS, JavaScript and build real websites from Class VIII onwards." },
            { icon: "🎮", title: "VR Learning", desc: "Explore virtual historical sites, anatomy models and science experiments in VR." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 text-center hover:bg-primary hover:text-white group transition-all duration-500 hover:-translate-y-3">
              <div className="text-5xl mb-5 group-hover:scale-125 transition-transform">{item.icon}</div>
              <h4 className="font-black text-primary group-hover:text-white text-xl mb-3 font-serif">{item.title}</h4>
              <p className="text-gray-500 group-hover:text-white/80 font-medium italic text-sm leading-relaxed">"{item.desc}"</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-primary text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-15 -mt-15 blur-3xl group-hover:bg-accent/20 transition-all"></div>
          <h3 className="text-3xl font-black italic font-serif mb-3 text-accent">Build the Future Today</h3>
          <p className="text-white/80 font-bold mb-8 uppercase tracking-widest text-sm">Enroll your child in Amravati's most tech-advanced school.</p>
          <div className="flex justify-center">
            <Admission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClass;
