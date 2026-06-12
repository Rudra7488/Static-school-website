import React from 'react';
import Admission from '../../components/Admission';

const Library = () => {
  return (
    <div className="pt-10 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-16 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Knowledge Hub</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Central Library</h1>
           <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="relative">
            <img src="/library.jpeg" alt="School Library" className="w-full h-[400px] object-cover object-top rounded-[3rem] shadow-2xl border-4 border-white" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-[3rem] flex flex-col justify-end p-10">
              <h2 className="text-white text-2xl lg:text-3xl font-black font-serif italic">"A Room Without Books Is Like A Body Without A Soul"</h2>
              <p className="text-white/80 font-bold mt-2 text-xs lg:text-sm uppercase tracking-widest">Vidya Bharati Central Library</p>
            </div>
          </div>
          <div className="relative">
            <img src="/childlib.jpeg" alt="Library Interior" className="w-full h-[400px] object-cover object-center rounded-[3rem] shadow-2xl border-4 border-white" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-[3rem] flex flex-col justify-end p-10">
              <h2 className="text-white text-2xl lg:text-3xl font-black font-serif italic">"Today a Reader, Tomorrow a Leader"</h2>
              <p className="text-white/80 font-bold mt-2 text-xs lg:text-sm uppercase tracking-widest">Quiet Study Spaces</p>
            </div>
          </div>
        </div>

        {/* Library Features Grid */}
        <div className="mb-10">
          <h3 className="text-3xl font-black text-primary font-serif mb-6 text-center">Resources & Collections</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { feature: "Fiction & Lit", icon: "📚" },
              { feature: "Science Journals", icon: "🔬" },
              { feature: "Digital E-Books", icon: "💻" },
              { feature: "Reference Books", icon: "📖" },
              { feature: "Magazines", icon: "📰" },
              { feature: "Quiet Study Area", icon: "🤫" },
              { feature: "History Archives", icon: "🏺" },
              { feature: "Arts & Culture", icon: "🎨" }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] shadow-lg text-center hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white group transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{f.icon}</div>
                <h4 className="font-black text-primary group-hover:text-white uppercase text-sm tracking-widest">{f.feature}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "💡", title: "Bright Reading Rooms", desc: "Spacious and well-lit areas designed for deep concentration and focus." },
            { icon: "🌐", title: "Digital Access", desc: "High-speed internet and computers available for research and e-learning." },
            { icon: "👨‍🏫", title: "Expert Librarians", desc: "Knowledgeable staff ready to assist students in finding the right materials." }
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
          <h3 className="text-3xl font-black italic font-serif mb-4 text-accent">Expand Your Horizons</h3>
          <p className="text-white/80 mb-8 font-bold">Encourage your child's love for reading and continuous learning.</p>
          <div className="flex justify-center">
            <Admission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
