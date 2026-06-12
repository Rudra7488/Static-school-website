// import React from 'react';
// import { Link } from 'react-router-dom';

// const Facilities = () => {
//   const facilityHighlights = [
//     {
//       title: "Science Labs",
//       icon: "🧪",
//       desc: "Advanced Physics, Chemistry & Biology labs with high-end equipment.",
//       link: "/facilities/lab",
//       color: "border-secondary"
//     },
//     {
//       title: "Smart Classes",
//       icon: "🏫",
//       desc: "Digital learning with interactive smart boards and multi-sensory tools.",
//       link: "/facilities/classroom",
//       color: "border-primary"
//     },
//     {
//       title: "Digital Wing",
//       icon: "💻",
//       desc: "High-speed internet enabled computer labs with AI learning modules.",
//       link: "/facilities/digital",
//       color: "border-accent"
//     },
//     {
//       title: "Sports Arena",
//       icon: "⚽",
//       desc: "Professional-grade football grounds and indoor sports facilities.",
//       link: "/facilities/sports",
//       color: "border-secondary"
//     }
//   ];

//   return (
//     <section id="facilities" className="py-[120px] bg-[#f8fbff] relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-[250px] -mt-[250px] blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full -ml-[250px] -mb-[250px] blur-3xl"></div>

//       <div className="max-w-6xl mx-auto px-5 relative z-10">
//         <div className="text-center mb-16">
//           <span className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-4 block">Modern Infrastructure</span>
//           <h2 className="text-5xl md:text-6xl font-black font-header text-primary leading-tight">
//             Our World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary italic pr-4">Facilities</span>
//           </h2>
//           <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {facilityHighlights.map((f, idx) => (
//             <Link 
//               key={idx} 
//               to={f.link}
//               className={`group bg-white p-8 rounded-[2rem] border-b-8 ${f.color} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center`}
//             >
//               <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
//                 {f.icon}
//               </div>
//               <h3 className="text-2xl font-black font-title text-primary mb-4 group-hover:text-secondary transition-colors">
//                 {f.title}
//               </h3>
//               <p className="text-gray-600 font-medium leading-relaxed">
//                 {f.desc}
//               </p>
//               <div className="mt-6 text-accent font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
//                 Explore More →
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <Link 
//             to="/facilities" 
//             className="inline-block bg-primary text-white font-black py-4 px-10 rounded-full hover:bg-secondary transition-all duration-300 shadow-xl hover:shadow-primary/30 tracking-widest text-sm"
//           >
//             VIEW ALL FACILITIES
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;
