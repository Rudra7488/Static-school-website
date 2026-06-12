import React from 'react';
import Admission from '../../components/Admission';

const SportsGround = () => {
  return (
    <div className="pt-10 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-16 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Sports & Athletics</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Sports & Fitness Arena</h1>
         <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-10">
          <img src="/Sports.jpeg" alt="Sports Ground" className="w-full h-[450px] object-cover object-top rounded-[3rem] shadow-2xl border-4 border-white" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent rounded-[3rem] flex flex-col justify-end p-12">
            <h2 className="text-white text-3xl font-black font-serif italic">"Champions Are Made Here"</h2>
            <p className="text-white/80 font-bold mt-2 text-sm uppercase tracking-widest">Vidya Bharati Sports Complex</p>
          </div>
        </div>

        {/* Sports Available Grid */}
        <div className="mb-10">
          <h3 className="text-3xl font-black text-primary font-serif mb-6 text-center">Available Sports</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { sport: "Cricket", icon: "🏏" },
              { sport: "Football", icon: "⚽" },
              { sport: "Basketball", icon: "🏀" },
              { sport: "Athletics", icon: "🏃" },
              { sport: "Table Tennis", icon: "🏓" },
              { sport: "Chess", icon: "♟️" },
              { sport: "Kabaddi", icon: "🤼" },
              { sport: "Badminton", icon: "🏸" }
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] shadow-lg text-center hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white group transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{s.icon}</div>
                <h4 className="font-black text-primary group-hover:text-white uppercase text-sm tracking-widest">{s.sport}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "🏆", title: "Expert Coaching", desc: "Dedicated coaches for each sport, trained at national level." },
            { icon: "🩺", title: "First Aid Center", desc: "On-site medical team available during all sports sessions." },
            { icon: "🚿", title: "Changing Rooms", desc: "Separate modern changing facilities with lockers for all students." }
          ].map((item, i) => (
            <div key={i} className="relative group bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-3 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              <div className="text-5xl mb-6">{item.icon}</div>
              <h4 className="font-black text-primary text-xl mb-3">{item.title}</h4>
              <p className="text-gray-500 font-medium italic leading-relaxed">&quot;{item.desc}&quot;</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center p-8 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-primary text-white shadow-2xl">
          <h3 className="text-3xl font-black italic font-serif mb-4 text-accent">Ready to Play?</h3>
          <p className="text-white/80 mb-8 font-bold">Join us and discover your child's hidden athletic potential.</p>
          <div className="flex justify-center">
            <Admission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsGround;
