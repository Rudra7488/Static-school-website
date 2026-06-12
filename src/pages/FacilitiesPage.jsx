import React from 'react';

const FacilitiesPage = () => {
  const fullFacilities = [
    {
      title: "Science & Technology Labs",
      details: "Fully equipped Physics, Chemistry, and Biology laboratories with advanced apparatus to encourage research and practical learning.",
      img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
      accent: "border-secondary"
    },
    {
      title: "Modern Computer Centre",
      details: "High-speed internet enabled computer labs with a 1:1 student-PC ratio, focusing on coding, AI, and digital literacy.",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=500&fit=crop",
      accent: "border-primary"
    },
    {
      title: "Audio-Visual Smart Rooms",
      details: "Classrooms equipped with interactive smart boards and surround sound to make lessons visually engaging and interactive.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
      accent: "border-accent"
    },
    {
      title: "Sports Complex",
      details: "Extensive playgrounds for outdoor sports like Cricket, Football, and Basketball, along with a dedicated indoor games arena.",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
      accent: "border-secondary"
    }
  ];

  return (
    <div className="pt-20 pb-8 min-h-screen bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-4 block animate-bounce">Premium Infrastructure</span>
         <h1 className="text-4xl md:text-6xl font-black font-serif text-primary italic">Our World-class Facilities</h1>
          <div className="w-32 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Detailed Facilities Grid */}
        <div className="space-y-10">
          {fullFacilities.map((f, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center group`}>
               <div className="w-full lg:w-1/2 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 blur-[1px] opacity-20`}></div>
                  <img src={f.img} alt={f.title} className="relative w-full h-[350px] object-cover rounded-[3rem] shadow-2xl z-10 border-4 border-white" />
               </div>
               <div className="w-full lg:w-1/2 space-y-4">
                  <h3 className={`text-3xl font-black font-title text-primary border-b-4 pb-2 inline-block ${f.accent}`}>{f.title}</h3>
                  <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                    "{f.details}"
                  </p>
                  <ul className="grid grid-cols-2 gap-2 pt-2">
                     {["Certified Safety", "Modern Tech", "Expert Faculty", "24/7 CCTV"].map((tag, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-500">
                           <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                           {tag}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FacilitiesPage;
