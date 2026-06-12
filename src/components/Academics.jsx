import React from 'react';

const Academics = () => {
  const academicLevels = [
    {
      title: "Pre-Primary Section",
      desc: "Laying the foundation of life with activity-based learning and playful exploration for our youngest learners.",
      img: "/pre.jpeg",
      link: "/courses/pre-primary",
      colorTag: "bg-accent text-primary",
      gradient: "from-accent/5 to-white"
    },
    {
      title: "Primary & Middle",
      desc: "Fostering academic rigor and character building through a balanced curriculum of science, arts, and ethics.",
      img: "/primary.jpeg",
      link: "/courses/primary-secondary",
      colorTag: "bg-secondary text-white",
      gradient: "from-secondary/5 to-white"
    },
    {
      title: "Junior College",
      desc: "Advanced specializations in Science, Commerce, and Arts with expert guidance for board and competitive exams.",
      img: "/Child.jpeg",
      link: "/courses/junior-college",
      colorTag: "bg-primary text-white",
      gradient: "from-primary/5 to-white"
    }
  ];

  return (
    <section id="academics" className="py-[120px] bg-white relative overflow-hidden">
      {/* Decorative Title */}
      <div className="max-w-6xl mx-auto px-5 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
             <span className="text-secondary font-black tracking-[0.3em] uppercase text-sm">Academic Excellence</span>
             <h2 className="text-5xl md:text-6xl font-black font-header text-primary leading-tight">
               Our Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary italic pr-4">Pathways</span>
             </h2>
          </div>
          <p className="text-gray-500 max-w-[450px] font-medium text-lg leading-relaxed border-l-4 border-accent pl-6">
            Providing a seamless educational journey from foundation years to senior secondary success.
          </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {academicLevels.map((level, idx) => (
          <div key={idx} className="group relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
            {/* Image Section */}
            <div className="relative h-[280px] overflow-hidden">
              <img src={level.img} alt={level.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className={`absolute top-6 left-6 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest ${level.colorTag} shadow-lg shadow-black/20`}>
                {level.title.split(' ')[0]}
              </span>
            </div>
            
            {/* Content Section */}
            <div className={`p-10 bg-gradient-to-br ${level.gradient} flex flex-col items-center text-center space-y-4`}>
              <h3 className="text-2xl font-black font-title text-primary">{level.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed italic">
                "{level.desc}"
              </p>
              <a href={level.link} className="pt-4 flex items-center gap-2 text-secondary font-black tracking-widest text-sm hover:gap-4 transition-all uppercase">
                Explore Curriculum <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
