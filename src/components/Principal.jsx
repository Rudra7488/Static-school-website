import React from 'react';

const Principal = () => {
  return (
    <section id="principal" className="py-[120px] bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-center">

        {/* Principal Image with Premium Frame */}
        <div className="relative group flex flex-col items-center">
          <div className="relative">

            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 blur-[2px]"></div>

            {/* Image container */}
            <div className="relative p-3 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/principall.jpeg"
                alt="Principal of School"
                className="w-full h-[420px] rounded-2xl object-cover object-top 
                scale-100 group-hover:scale-110 
                transition-all duration-700 ease-in-out"
              />

              {/* Overlay tag */}
              <div className="absolute bottom-10 -right-5 bg-accent text-primary px-6 py-2 rounded-lg font-black shadow-xl transform rotate-2">
                PRINCIPAL
              </div>
            </div>
          </div>

          {/* Principal Info */}
          <div className="mt-8 text-center space-y-1">
            <h4 className="text-xl font-black text-secondary font-title">
              Mr. Pawankumar M. Adgokar
            </h4>
            <p className="text-primary font-bold text-sm uppercase tracking-wider">
              Principal
            </p>
            <div className="text-gray-500 font-bold text-[0.75rem] leading-tight uppercase tracking-tighter">
              Vidya Bharati <br />
              English School & Jr. College, <br />
              Amravati.
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="space-y-8 relative">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-black tracking-widest uppercase mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Welcome Address
          </div>

          {/* Heading */}
          <h3 className="text-4xl md:text-5xl font-black font-header text-primary leading-tight">
            Principal's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#ea4c89] italic pr-4">
              {" "}Desk
            </span>
          </h3>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium italic relative">

            {/* Big Quote */}
            <span className="absolute -top-10 -left-10 text-[10rem] text-primary/5 font-header select-none">
              “
            </span>

            <p className="relative z-10">
              Dear <span className="font-bold text-primary">Students, Parents,</span> and{" "}
              <span className="font-bold text-primary">Well-wishers</span>, We extend a{" "}
              <span className="text-secondary font-bold">warm welcome</span> to you at Vidya Bharati English School and Junior College, Patrakar Colony, Amravati.
            </p>

            <p className="relative z-10">
              At our institution, alongside quality education, special emphasis is placed on character building, discipline, moral values, and the holistic development of our students.
            </p>

            <p className="relative z-10">
              Our primary objective is to identify the potential within every student and empower them to build a bright future. Through the collaborative efforts of parents, teachers, and the school, we are committed to shaping a successful and well-rounded future for our students.
            </p>
          </div>

          {/* Footer line */}
          <div className="flex items-center gap-6 pt-10 border-t border-gray-100">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              Shaping Futures Since 2011
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Principal;