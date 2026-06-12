import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-[70px]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-[50px]">
          <h2 className="text-[2.2rem] font-bold mb-2.5 font-serif text-primary">Photo Gallery</h2>
          <div className="divider"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/Newp.jpeg"
            alt="Activity"
            className="w-full h-[150px] md:h-[250px] object-cover rounded hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          />
          <img
            src="/classrooms.jpeg"
            alt="Library"
            className="w-full h-[150px] md:h-[250px] object-cover rounded hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          />
          <img
            src="/digital.jpeg"
            alt="Sports"
            className="w-full h-[150px] md:h-[250px] object-cover rounded hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          />
          <img
            src="/classroom.jpeg"
            alt="Event"
            className="w-full h-[150px] md:h-[250px] object-cover rounded hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
