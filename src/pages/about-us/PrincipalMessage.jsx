import React from 'react';

const PrincipalMessage = () => {
  return (
    <div className="pt-20 pb-8 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-5">
          <div className="mb-12 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Our Learning Environment</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Welcome Address</h1>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* Principal Info */}
          <div className="sticky top-[160px] flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 blur-[2px]"></div>
              <div className="relative p-3 bg-white rounded-3xl shadow-2xl">
                <img 
                  src="/principall.jpeg" 
                  alt="Principal" 
                  className="w-full rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <h4 className="text-3xl font-black text-primary font-title mb-2">Mr. Pawankumar M. Adgokar</h4>
              <p className="text-secondary font-black uppercase tracking-widest text-sm mb-4">Principal</p>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              <div className="text-gray-500 font-bold leading-relaxed uppercase tracking-tighter text-sm">
                Vidya Bharati <br />
                English School & Jr. College, <br />
                Amravati.
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="space-y-5 bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-gray-100 relative">
            <div className="bg-secondary/10 py-2 px-6 rounded-lg inline-block mb-4">
              <h2 className="text-secondary font-black tracking-widest uppercase text-sm m-0">Principal's Desk</h2>
            </div>
            
            <div className="relative z-10 space-y-6 text-xl text-gray-700 leading-relaxed font-sans">
              <p>
                Dear <span className="font-bold text-primary">Students, Parents,</span> and <span className="font-bold text-primary">Well-wishers</span>, We extend a <span className="font-bold text-secondary italic pr-2">warm welcome</span> to you at Vidya Bharati English School and Junior College, Patrakar Colony, Amravati.
              </p>
              <p>
                At our institution, along-side quality education, special emphasis is placed on character building, discipline, moral values, and the holistic development of our students.
              </p>
              <p>
                Our primary objective is to identify the potential within every student and empower them to build a bright future. Through the collaborative efforts of parents, teachers, and the school, we are committed to shaping a successful and well-rounded future for our students.
              </p>
            </div>

            <div className="pt-10 border-t border-gray-100 mt-10">
              <p className="text-primary font-black text-xl mb-1 italic pr-4">Warm Regards,</p>
              <h4 className="text-2xl font-black text-secondary font-title">Mr. Pawankumar M. Adgokar</h4>
              <p className="text-gray-400 font-bold  tracking-widest text-xs">Principal, VB English School & Jr. College</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
