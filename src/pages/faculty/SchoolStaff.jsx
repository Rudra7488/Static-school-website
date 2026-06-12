import React from 'react';

const SchoolStaff = () => {
  const leadership = [
    { role: "Principal", name: "Mr. P. M. Adogkar", qual: "Head of Institution", img: "/principall.jpeg" },
    { role: "Vice Principal", name: "Miss. S. V. Rajput", qual: "Assistant Head", img: "/vicepresident.png" }
  ];

  const allStaff = [
    // Junior College Staff
    { name: "Miss. Ankita gupta", qual: "M.Sc.(Phy.) B.Ed", img: "/Ankitaa.jpeg" },
    { name: "Miss. Arti Kandalkar", qual: "M.Sc.(Che) B.Ed", img: "/arti.jpeg" },
    { name: " Miss. Bhagyshri Kamble", qual: "M.Com. B.Ed", img: "/bhagashrii.jpeg" },
    { name: "Mr. Dhiraj Yadav", qual: "M.Sc.(Bio.) B.Ed", img: "/Dhirajj.jpeg" },
    { name: "Miss. Harsha Wadhwani", qual: "M.Com.", img: "/Harshaa.jpeg" },
    { name: "Miss. Kanchan Sangane", qual: "M.Sc.(Comp.)", img: "/kanchann.jpeg" },
    { name: "Miss. Nisha Jalamkar", qual: "MA (Eng) B.Ed", img: "/Nishaa.jpeg" },
    { name: "Pragati Levaskar", qual: "M.Sc. B.Ed", img: "/pragatii.jpeg" },
    { name: "Miss. Rajeshri Sagne", qual: "M.Sc.(Maths) B.Ed", img: "/Rajeshrii.jpeg" },
   
    // Primary Secondary Staff
    { name: "Miss. Rupali Bangale", qual: "M.Com B.ed", img: "/Rupalii.jpeg" },
    { name: "Miss. Sadhna Chahakar", qual: "M.Sc. B.Ed.", img: "/sadhnaa.jpeg" },
    { name: "Miss. Shivani Bele", qual: "B.Sc. B.Ed.", img: "/shivanii.jpeg" },
    { name: "Miss. Tejal adsad", qual: "M.A B.Ed", img: "/tejal.jpeg" },
    { name: "Miss. Tejaswini Sable", qual: "MP.Ed", img: "/Tejashvi.jpeg" },
    { name: "Miss. Vandana awate", qual: "M.A. B.Ed", img: "/vandanaa.jpeg" },
    { name: "Miss. Varsha Vaidya", qual: "MA. B.Ed", img: "/varshaa.jpeg" },
     { name: "Miss. S. O. Barve", qual: "MA. B.Ed", img: "/Barve.jpeg" },
   
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent -z-10"></div>
          <span className="bg-[#fffcfd] px-6 text-secondary font-black tracking-[0.4em] uppercase text-xs mb-4 inline-block">Our Dedicated Team</span>
          <h1 className="text-5xl md:text-7xl font-black font-header text-primary leading-tight drop-shadow-sm">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary italic pr-4">Faculty</span>
          </h1>
          <div className="w-32 h-2 bg-accent mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>

        {/* Leadership Section - RESTORED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-20">
          {leadership.map((member, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6">
                <div className="absolute -inset-3 bg-gradient-to-tr from-secondary via-accent to-primary rounded-full opacity-30 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 blur-[2px]"></div>
                <div className="absolute inset-0 bg-white rounded-full p-2 shadow-2xl z-10">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-50 bg-white">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="text-[1.25rem] font-black text-secondary font-title mb-1 group-hover:text-primary transition-colors leading-tight uppercase tracking-wider">
                  {member.role}
                </h4>
                <p className="text-[1.1rem] font-black text-primary font-title group-hover:text-secondary transition-colors leading-tight">
                  {member.name}
                </p>
              
              </div>
            </div>
          ))}
        </div>

        {/* Combined Staff Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {allStaff.map((member, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="relative w-52 h-52 md:w-56 md:h-56 mb-6">
                <div className="absolute -inset-3 bg-gradient-to-tr from-secondary via-accent to-primary rounded-full opacity-20 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 blur-[2px]"></div>
                <div className="absolute inset-0 bg-white rounded-full p-2 shadow-xl z-10">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-50 bg-white">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="text-[1.1rem] font-black text-primary font-title mb-1.5 group-hover:text-secondary transition-colors leading-tight">
                  {member.name}
                </h4>
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SchoolStaff;