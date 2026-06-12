import React from 'react';
import Admission from '../../components/Admission';

const AcademicBlock = () => {
  return (
    <div className="pt-10 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-16 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Heart of the Campus</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Academic Main Block</h1>
           <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative mb-10 group">
          <img src="/Child.jpeg" alt="Academic Block" className="w-full h-[450px] object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
          <div className="absolute inset-0 flex items-end p-12 rounded-[3rem] bg-gradient-to-t from-primary/80 to-transparent">
            <p className="text-white text-xl font-black italic font-serif max-w-2xl">
              "The architectural pride of Vidya Bharati — where knowledge, administration, and culture unite under one roof."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border-t-8 border-secondary">
            <h3 className="text-2xl font-black text-secondary font-serif italic mb-6">Block Highlights</h3>
            <ul className="space-y-3">
              {["Central Administrative Hub", "Dedicated Staff Rooms per Department", "Student Counseling Cells", "Modern Architecture & Design", "24/7 CCTV Surveillance", "Drinking Water Purifiers"].map((f, i) => (
                <li key={i} className="flex items-start gap-4 font-bold text-gray-700 border-b border-gray-50 pb-4 last:border-0">
                  <span className="w-8 h-8 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center font-black shrink-0">{i + 1}</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: "🏗️", title: "3-Floor Building", desc: "Designed to accommodate 1200+ students across all classes." },
              { icon: "📚", title: "Central Library", desc: "Over 10,000 books and journals available for students and staff." },
              { icon: "🔐", title: "Secured Entry", desc: "Biometric attendance for staff and digital ID-based entry for students." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-6 items-center hover:-translate-x-2 transition-all group">
                <div className="w-16 h-16 text-3xl bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">{item.icon}</div>
                <div>
                  <h4 className="font-black text-primary text-lg">{item.title}</h4>
                  <p className="text-gray-500 font-medium italic text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 p-8 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-primary text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-15 -mt-15 blur-3xl group-hover:bg-accent/20 transition-all"></div>
          <h3 className="text-3xl font-black italic font-serif mb-3 text-accent">Be Part of Our Legacy</h3>
          <p className="text-white/80 font-bold mb-8 uppercase tracking-widest text-sm">Join the administrative hub of excellence.</p>
          <div className="flex justify-center">
            <Admission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicBlock;
