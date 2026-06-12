import React from 'react';

const History = () => {
  return (
    <div className="pt-10 pb-8 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-5">
     <div className="mb-12 text-center">
          <span className="bg-accent text-primary px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-md">Our Learning Environment</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Our Glorious History</h1>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
            <p>
              Vidya Bharati English School & Jr. College was founded in 2011 under the visionary leadership of the Vidya Bharati Shaikshanik Mandal, Amravati. What started as a small initiative to provide quality English medium education has now grown into a premier educational institution in the region.
            </p>
            <p>
              Over the last decades, we have consistently evolved, adopting modern pedagogical methods while staying rooted in our core values. Our journey is marked by numerous academic achievements, sports excellence, and the success stories of our alumni who are now leading in various fields globally.
            </p>
            <div className="p-8 bg-primary/5 border-l-8 border-primary rounded-r-3xl italic">
              " Decades of nurturing young minds and building a foundation for a brighter future."
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-3 blur-sm opacity-20"></div>
            <img 
              src="/Child.jpeg" 
              alt="School History" 
              className="relative w-full h-[400px] object-cover rounded-[3rem] shadow-2xl z-10 border-4 border-white"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { year: "2011", event: "Foundation of Vidya Bharati English School" },
            { year: "2020", event: "Expansion to Secondary and Higher Secondary levels" },
            { year: "2021", event: "Introduction of Digital Learning and Smart Classrooms" },
            
            { year: "2025-26", event: "State-of-the-art Science and Technology Wing" },
            { year: "Today", event: "Leading with excellence in Amravati" }
          ].map((milestone, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
              <span className="text-3xl font-black text-secondary mb-2 block group-hover:scale-110 transition-transform">{milestone.year}</span>
              <p className="text-gray-700 font-bold">{milestone.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
