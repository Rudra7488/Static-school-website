import React from 'react';

const adminStaff = [
    { name: "Mr. Vikas Rajput", qual: "Administrator", img: "/Vikash.jpeg" }, 
    { name: "Ku. Prachi Joshi", qual: "Accountant", img: "/Prachi.jpeg" },
  ];

const AdminStaff = () => {

  return (
    <div className="pt-20 pb-16 min-h-screen bg-[#fffcfd]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent -z-10"></div>
          <span className="bg-[#fffcfd] px-6 text-secondary font-black tracking-[0.4em] uppercase text-xs mb-4 inline-block">Management Team</span>
          <h1 className="text-5xl md:text-7xl font-black font-header text-primary leading-tight drop-shadow-sm">
            Administrative <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary italic pr-4">Staff</span>
          </h1>
          <div className="w-32 h-2 bg-accent mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>

        {/* Admin Staff Section */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mb-20">
          {adminStaff.map((member, idx) => (
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
                <h4 className="text-[1.3rem] font-black text-primary font-title mb-1.5 group-hover:text-secondary transition-colors leading-tight">
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

export default AdminStaff;
