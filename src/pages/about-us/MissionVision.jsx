import React from 'react';

const MissionVision = () => {
  return (
    <div className="pt-20 pb-8 min-h-screen bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Our Learning Environment</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Mission & Vision</h1>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-primary relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6">👁️</div>
              <h2 className="text-4xl font-black font-header text-primary mb-4">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium italic">
                "Vision is the highest inside God
                provides to instruct and direct the path of an
                organizaon we as an instuon dedicated to
                a connuing tradion of excellence, in an ever
                changing world for our pupils by inslling in
                them a global perfect perspecve, respect for
                core values and high quality educaon. We
                honour achievement and promote pride in
                ourselves in our school and in our community"
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-secondary relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-3xl mb-6">🚀</div>
              <h2 className="text-4xl font-black font-header text-secondary mb-4">Our Mission</h2>
               <p className="text-xl text-gray-600 leading-relaxed font-medium italic">
              "we commit to create flexible learner
centred School communies that advanced
learning and leadership within every pupil
while fostering the skills and disposion
necessary for success".

              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <h2 className="text-3xl font-black font-header text-center text-primary mb-8">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", icon: "⚖️" },
              { title: "Excellence", icon: "⭐" },
              { title: "Innovation", icon: "💡" },
              { title: "Respect", icon: "🤝" }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-50">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-black text-primary font-title">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
