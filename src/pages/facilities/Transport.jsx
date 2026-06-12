import React from 'react';
import Admission from '../../components/Admission';

const Transport = () => {
  return (
    <div className="pt-10 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-16 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Safe & Reliable Travel</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">School Bus Facility</h1>
         <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-2 opacity-20 group-hover:rotate-0 transition-transform duration-500 blur-sm"></div>
            <img src="/bus.jpeg" alt="School Bus" className="relative w-full rounded-[3rem] shadow-2xl border-4 border-white" />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
              <p className="font-black text-primary text-sm uppercase tracking-widest">GPS Tracked Fleet</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-primary font-serif border-l-8 border-accent pl-6">Secure Commute</h3>
            <p className="text-lg text-gray-600 font-medium italic leading-relaxed">
              "Ensuring a safe and comfortable journey for every student is our top priority. Our fleet of modern buses covers all major routes across Amravati city."
            </p>
            <ul className="space-y-3">
              {[
                "Experienced & Verified Drivers",
                "Dedicated Female Attendants on Every Bus",
                "Real-time GPS Tracking for Parents",
                "Strict Safety Protocols & Speed Governors",
                "Door-to-Door Pickup and Drop Service",
                "Regular Vehicle Maintenance Checks"
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-gray-700 border-b border-gray-100 pb-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transport Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "15+", label: "Modern Buses" },
            { stat: "20+", label: "Routes Covered" },
            { stat: "100%", label: "Safety Record" },
            { stat: "Live", label: "GPS Tracking" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 text-center shadow-xl border border-gray-50 hover:-translate-y-2 transition-all group">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all">{item.stat}</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-primary text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-15 -mt-15 blur-3xl group-hover:bg-accent/20 transition-all"></div>
          <h3 className="text-3xl font-black italic font-serif mb-3 text-accent">Join Our Safe Commute</h3>
          <p className="text-white/80 font-bold mb-8 uppercase tracking-widest text-sm">Experience the most reliable transport facility in Amravati.</p>
          <div className="flex justify-center">
            <Admission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
